const resetEmail = require("../email/templates/resetEmail");
const hash = require("../utils/bcrypt");
const crypto = require("crypto");
const Joi = require("joi");
const { Token } = require("../models/token");
const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/password-reset/:userId/:token", async (req, res) => {
  const schema = Joi.string().min(3).max(1000).required();
  const { error } = schema.validate(req.body.password);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ _id: req.params.userId }).catch((err) =>
    res.status(400).send("Link expired or invalid link")
  );

  const verifiedToken = await Token.findOne({
    token: req.params.token,
    userId: user._id,
  });
  if (!verifiedToken)
    return res.status(400).send("Link expired or invalid link");

  const hashPassword = await hash(req.body.password);
  await verifiedToken.deleteOne();
  await User.updateOne({ _id: user._id, password: hashPassword });

  if (!user.isVerified)
    await User.updateOne({ _id: user._id, isVerified: true });

  res.send("password reset sucessfully");
});

router.post("/send-email/password-reset", async (req, res) => {
  const schema = Joi.string().min(3).max(250).required().email();
  const { error } = schema.validate(req.body.email);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email address");

  let token = await Token.findOne({ userId: user._id });

  if (token) {
    resetEmail(user, token.token);
    return res.send("An email has sent you.");
  }

  token = crypto.randomBytes(32).toString("hex");
  await new Token({ userId: user._id, token: token }).save();
  resetEmail(user, token);

  res.send("An email has sent you.");
});

module.exports = router;
