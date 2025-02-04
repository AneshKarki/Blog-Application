const mongoose = require("mongoose");
const { type } = require("os");
const blogSchema = mongoose.Schema({
  author: {
    type: String,
  },
  category: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  blogParagraph: {
    type: String,
  },
});

const blog = mongoose.model("Blogs", blogSchema);
module.exports = blog;
