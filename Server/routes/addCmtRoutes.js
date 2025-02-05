const express = require("express");
const router = express.Router();
const addCmt = require("../controller/addCmt");
router.post("/add", addCmt);
module.exports = router;
