const express = require("express");
const router = express.Router();
const register = require("../controller/register");
try {
  router.post("/", register);
} catch (err) {
  console.log(err);
}
module.exports = router;
