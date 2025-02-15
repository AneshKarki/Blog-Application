const express = require("express");
const router = express.Router();
const { createBlog, upload } = require("../controller/createBlog");
const jwtVerification = require("../middleware/jwtVerification");
router.post("/", jwtVerification, upload.single("image"), createBlog);

module.exports = router;
