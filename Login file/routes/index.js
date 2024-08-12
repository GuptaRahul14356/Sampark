const express = require("express");
const { registerUser, loginUser } = require("../userController");
const { userRegistervalidation, userLoginvalidate } = require("../utility/userValidation");
const { userRegistervalidate } = require("../utility/userValidation");
const routes = express();

routes.post("/register",userRegistervalidate, registerUser);

routes.post("/login",userLoginvalidate, loginUser);

module.exports = routes;
