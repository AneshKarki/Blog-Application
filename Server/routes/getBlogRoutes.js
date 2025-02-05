const express = require("express");
const router = express.Router();
const { getBlog, getBlogById } = require("../controller/getBlog");
router.get("/", getBlog);
router.get("/:id", getBlogById);

module.exports = router;
