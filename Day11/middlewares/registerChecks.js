const { emailValidate, passwordValidate } = require("../utils/validate");

const registerInitialCheck = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 0 &&
    password === confirmPassword &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("Initial check fails");
  }
};

module.exports = registerInitialCheck;