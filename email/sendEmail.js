const nodemailer = require("nodemailer");

const sendEmail = (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.PORT,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    transporter
      .sendMail({
        from: process.env.USER,
        to: email,
        subject: subject,
        text: text,
      })
      .then(console.log("email sent sucessfully"));
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
