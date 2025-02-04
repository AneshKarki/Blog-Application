const blog = require("../models/blog");
const mongoose = require("mongoose");
const getBlog = async (req, res) => {
  try {
    const blogs = await blog.find({});
    res.status(200).send(blogs);
  } catch (err) {
    console.log(err);
  }
};
module.exports = getBlog;
