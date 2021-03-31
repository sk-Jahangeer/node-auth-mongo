const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 250,
    required: true,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 250,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 3,
    maxLength: 1000,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    process.env.JWTPRIVATEKEY
  );
  return token;
};

const User = mongoose.model("user", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(250).required(),
    email: Joi.string().min(3).max(250).required().email(),
    password: Joi.string().min(3).max(1000).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
