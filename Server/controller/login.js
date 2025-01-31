const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const jwtSceretKey = process.env.jwtSceretKey;
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ mesaage: "null " });
  }
  try {
    const find = await User.findOne({ email });
    console.log(find);
    if (!find) {
      return res.status(400).json({ message: "user not found" });
    }
    const comparePassword = await bcrypt.compare(password, find.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "incoorect password" });
    }
    const token = jwt.sign({ email: email }, jwtSceretKey);

    return res
      .status(200)
      .json({ message: "login Successfully", token: token });
  } catch (err) {
    console.log(err);
  }
};
module.exports = login;
