const sendEmail = require("../sendEmail");
const baseUrl = process.env.BASE_URL;

const resetEmail = (user, token) => {
  const link = `${baseUrl}/api/verify/password-reset/${user._id}/${token}`;

  return sendEmail(
    user.email,
    "Password Reset",
    `click on the link to change password of your account ${link}. this link is valid only for 1 hour.`
  );
};

module.exports = resetEmail;
