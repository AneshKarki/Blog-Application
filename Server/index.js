const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();
const port = process.env.port;
const url = process.env.mongoDbUrl;

const register = require("./routes/registerRoutes");
app.use("/api/registerUser", register);

const createBlog = require("./routes/createBlogRoutes");
app.use("/api/createBlog", createBlog);

const getBlog = require("./routes/getBlogRoutes");
app.use("/api/getBlog", getBlog);

const addCmt = require("./routes/addCmtRoutes");
app.use("/api/cmt", addCmt);

const showCmt = require("./routes/showCmtRoutes");
app.use("/api/getComment", showCmt);

const login = require("./routes/loginRoutes");
app.use("/api/loginUser", login);
app.listen(port, () => {
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongoDb"))
    .catch((err) => console.log(err));
  console.log(`server started at ${port}`);
});
