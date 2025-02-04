const express = require("express");
const router = express.Router();
const getBlog = require("../controller/getBlog");
router.get("/", getBlog);
module.exports = router;
