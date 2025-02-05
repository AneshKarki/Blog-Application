const bcrypt = require("bcrypt");
const user = require("../models/user");
require("dotenv").config();
const register = async (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    res.status(400).json({ message: "couldn't found email or password" });
  }
  try {
    const saltRounds = Number(process.env.saltRounds);
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (hashedPassword) {
      try {
        const add = new user({
          email: email,
          password: hashedPassword,
          fullName: fullName,
        });
        add.save();
        res.status(200).json({ message: "register Successfully" });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = register;
