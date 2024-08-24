const express = require("express");
const userRoutes = require("./user");
const youthRoutes = require("./youth");
const guestRoutes = require("./sabha");
const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/youth", youthRoutes);
app.use("/sabha", guestRoutes);

module.exports = app;
