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

const login = require("./routes/loginRoutes");
app.use("/api/loginUser", login);
app.listen(port, () => {
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongoDb"))
    .catch((err) => console.log(err));
  console.log(`server started at ${port}`);
});
