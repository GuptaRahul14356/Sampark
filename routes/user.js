/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { authenticateToken } = require("./auth");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/", authenticateToken, userController.getUsers);
//router.get("/users", ensureAuthentication.getUsers, userController.getUsers);

module.exports = router;
