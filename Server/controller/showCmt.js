const blog = require("../models/blog");
const comment = require("../models/comment");

const showCmt = async (req, res) => {
  console.log("hello");
  const { id } = req.params;
  try {
    const blogCmt = await comment.find({ postId: id });
    console.log(blogCmt);
    if (!blogCmt) {
      return res.status(400).json({ message: "could not find comment" });
    }
    res.status(200).json(blogCmt);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = showCmt;
