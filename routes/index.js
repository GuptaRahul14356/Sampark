const express = require("express");
const userRoutes = require("./user");
const app = express();

app.use(express.json());

app.use("/user", userRoutes);
// app.use("/youth", userRoutes);
// app.use("/sabha", userRoutes);
// app.use("/attendance", userRoutes);

module.exports = app;
