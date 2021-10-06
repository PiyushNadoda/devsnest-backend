const User = require("../models/mongo");
const bcrypt = require("bcrypt");



function validateEmailAccessibility(email){

  return User.findOne({email: email}).then(function(result){
    console.log(result);
       return result !== null;
  });
}

const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists.");
    } else {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({email: email.toLowerCase(), password: hash, fullName: "Piyush"})
    const savedUser = await newUser.save();
    res.status(201).send(savedUser)
  } }catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong")
  }
};

module.exports = register;
