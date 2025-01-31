const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("Users", userSchema);
module.exports = user;
