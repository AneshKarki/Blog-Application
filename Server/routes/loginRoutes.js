const express = require("express");
const router = express.Router();
const login = require("../controller/login");

try {
  router.post("/", login);
} catch (err) {
  console.log(err);
}

module.exports = router;
