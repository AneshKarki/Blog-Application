const comment = require("../models/comment");

const addCmt = async (req, res) => {
  const { cmt, id } = req.body;
  try {
    const newComment = new comment({
      postId: id,
      commentText: cmt,
    });
    const add = await newComment.save();
    if (add) {
      res.status(200).json({ message: "comment added" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = addCmt;
