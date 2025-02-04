const express = require("express");
const router = express.Router();
const { createBlog, upload } = require("../controller/createBlog");

router.post("/", upload.single("image"), createBlog);


module.exports = router;
