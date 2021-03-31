require("dotenv").config();
require("express-async-errors");
const passwordReset = require("./routes/passwordReset");
const login = require("./routes/login");
const emailVerify = require("./routes/emailVerify");
const register = require("./routes/register");
const connection = require("./db");
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();

(async function db() {
  await connection();
})();

app.use(cors());
app.use(express.json());
app.use("/api/auth", register, login);
app.use("/api/verify", emailVerify, passwordReset);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
