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
const getBlogById = async (req, res) => {
  try {
    console.log("here");
    const { id } = req.params;
    const singleBlog = await blog.findById(id);
    if (!singleBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    // console.log(singleBlog);
    res.status(200).json(singleBlog);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getBlog, getBlogById };
