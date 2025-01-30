const bcrypt = require("bcrypt");
require("dotenv").config();
const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const saltRounds = Number(process.env.saltRounds);
  const salt = await bcrypt.genSalt(saltRounds);
  console.log(saltRounds);
  if (!email || !password) {
    res.status(400).json({ message: "couldn't found email or password" });
  }
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
};
module.exports = register;
