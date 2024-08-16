const express = require("express");
const userRoutes = require("./user");
const youthRoutes = require("./youth");
const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/youth", youthRoutes);
app.use("/sabha", userRoutes);
// app.use("/attendance", userRoutes);

module.exports = app;
