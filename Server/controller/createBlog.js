//middleware to handle image through cloudinary
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "ddm42l4y9",
  api_key: "629963432395396",
  api_secret: "cJgnv_bmuSjNfmSmtd4VH_3jAys",
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage });

const blog = require("../models/blog");
const createBlog = async (req, res) => {
  const { author, category, blogParagraph } = req.body;
  const imageUrl = req.file.path;
  try {
    const newBlog = new blog({
      author: author,
      category: category,
      blogParagraph: blogParagraph,
      imageUrl: imageUrl,
      blogOwner: req.user.id,
    });
    const saved = await newBlog.save();
    if (!saved) {
      return res.status(500).json({ message: "clodn't saved in database" });
    }
    res.status(200).json({ message: "Blog created successfully!" });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createBlog, upload };
