const comment = require("../models/comment");

const addCmt = async (req, res) => {
  const { cmt, id, userID, fullName } = req.body;
  try {
    const newComment = new comment({
      postId: id,
      commentText: cmt,
      userId: userID,
      fullName: fullName,
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
const deleteCmt = async (req, res) => {
  const cmtId = req.body.cmtId;
  try {
    const deleted = await comment.findByIdAndDelete(cmtId);
    if (!deleted) {
      return res.status(500).json({ message: "error while updating database" });
    }
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    console.log(err);
  }
  console.log(req.body.cmtId);
};

module.exports = { addCmt, deleteCmt };
