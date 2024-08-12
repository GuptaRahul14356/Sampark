const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(" ERROR while creating MongoDB connection", err));
