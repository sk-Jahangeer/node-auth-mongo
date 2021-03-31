const sendEmail = require("../sendEmail");
const baseUrl = process.env.BASE_URL;

const verifyEmail = (user, token) => {
  const link = `${baseUrl}/api/verify/account/email/${user._id}/${token}`;

  return sendEmail(
    user.email,
    "Verify email to activate account",
    `click on the link to active your account on vibind ${link}. this link is valid only for 1 hour.`
  );
};

module.exports = verifyEmail;
