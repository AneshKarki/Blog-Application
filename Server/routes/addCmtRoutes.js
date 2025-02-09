const express = require("express");
const router = express.Router();
const { addCmt, deleteCmt } = require("../controller/addCmt");
router.post("/add", addCmt);
router.post("/delete", deleteCmt);
module.exports = router;
