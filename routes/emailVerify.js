const { Token } = require("../models/token");
const { User } = require("../models/user");
const verifyEmail = require("../email/templates/verifyEmail");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.get("/email/:userId/:token", async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId }).catch((err) =>
    res.status(400).send("Link expired or invalid link")
  );

  const verifiedToken = await Token.findOne({
    token: req.params.token,
    userId: user._id,
  });

  if (!verifiedToken)
    return res.status(400).send("Link expired or invalid link");

  await verifiedToken.deleteOne();
  await User.updateOne({ _id: user._id, isVerified: true });

  res.send("email verified sucessfully");
});

router.post("/send-email/account", async (req, res) => {
  const schema = Joi.string().min(3).max(250).required().email();
  const { error } = schema.validate(req.body.email);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Link expired or invalid link");

  if (user.isVerified)
    return res.status(400).send("Link expired or invalid link");

  let token = await Token.findOne({ userId: user._id });

  if (token) {
    verifyEmail(user, token.token);
    return res.send("An email has sent you.");
  }

  token = crypto.randomBytes(32).toString("hex");
  await new Token({ userId: user._id, token: token }).save();
  verifyEmail(user, token);

  res.send("An email has sent you.");
});

router.get("/email-link/:userId/:token", async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId }).catch((err) =>
    res.status(400).send("Link expired or invalid link")
  );

  const verifiedToken = await Token.findOne({
    token: req.params.token,
    userId: user._id,
  });

  if (!verifiedToken)
    return res.status(400).send("Link expired or invalid link");

  res.send("sucess");
});

module.exports = router;
