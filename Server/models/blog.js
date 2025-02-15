const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const { type } = require("os");
const blogSchema = mongoose.Schema({
  author: {
    type: String,
  },
  blogOwner: {
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
  comment: {
    type: Array,
  },
});

const blog = mongoose.model("Blogs", blogSchema);
module.exports = blog;
