const express = require("express");
const userRoutes = require("./user");
const youthRoutes = require("./youth");
const guestRoutes = require("./sabha");
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/youths", youthRoutes);
app.use("/sabha", guestRoutes);

module.exports = app;
