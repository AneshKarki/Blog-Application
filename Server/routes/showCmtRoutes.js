const express = require("express");
const router = express.Router();
const showCmt = require("../controller/showCmt");
router.get("/:id", showCmt);
module.exports = router;
