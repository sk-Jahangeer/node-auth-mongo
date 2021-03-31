const verifyEmail = require("../email/templates/verifyEmail");
const crypto = require("crypto");
const hash = require("../utils/bcrypt");
const { User, validate } = require("../models/user");
const { Token } = require("../models/token");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) res.status(400).send("User with given email already exist!");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.password = await hash(user.password);
  await user.save();

  const token = crypto.randomBytes(32).toString("hex");
  await new Token({ userId: user._id, token: token }).save();
  verifyEmail(user, token);

  res.send("please verify your account. An email has sent to you.");
});

module.exports = router;
