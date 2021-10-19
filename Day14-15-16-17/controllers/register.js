const User = require("../models/mongo");
const bcrypt = require("bcrypt");

const saltRounds = 10;


function validateEmailAccessibility(email){

  return User.findOne({email: email}).then(function(result){
    console.log(result);
       return result !== null;
  });
}

const register = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const alreadyExists = await validateEmailAccessibility(email);
    if (alreadyExists) {
      res.status(401).send("Email already exists.");
    } else {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      name: name,
      username: username,
      role: "user",
    }); }
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const alreadyExists = await validateEmailAccessibility(email);
    if (alreadyExists) {
      res.status(401).send("Email already exists.");
    } else {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      name: name,
      username: username,
      role: "Super-admin",
    });
    const savedUser = await newUser.save();
    req.session.User = savedUser;
    res.status(201).send(savedUser);}
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
