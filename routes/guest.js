const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guest");

router.get("/user", guestController. handleGetSabhaUserById);
router.get("/update/user", guestController. handleUpdateSabhaUserById);
router.get("/delete/user", guestController. handleDeleteSabhaUserById);
router.get("/create/user", guestController. handleCreateSabhaNewUser);

module.exports = router;
