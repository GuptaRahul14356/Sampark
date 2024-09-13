const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { ensureAuthentication } = require("./auth");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/users", ensureAuthentication.getUsers);

module.exports = router;
