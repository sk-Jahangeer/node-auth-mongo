const verifyEmail = require("../email/templates/verifyEmail");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../models/user");
const { Token } = require("../models/token");
const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const pasword = await bcrypt.compare(req.body.password, user.password);
  if (!pasword) return res.status(400).send("Invalid email or password");

  if (!user.isVerified) {
    let token = await Token.findOne({ userId: user._id });

    if (token) {
      verifyEmail(user, token.token);
      return res.send({ message: "verify_email", email: user.email });
    }

    token = crypto.randomBytes(32).toString("hex");
    await new Token({ userId: user._id, token: token }).save();
    verifyEmail(user, token);
    res.send({ message: "verify_email", email: user.email });
  }

  const token = user.generateAuthToken();
  res.send(token);
});

function validate(data) {
  const schema = Joi.object({
    email: Joi.string().min(3).max(250).required().email(),
    password: Joi.string().min(3).max(1000).required(),
  });
  return schema.validate(data);
}

module.exports = router;
