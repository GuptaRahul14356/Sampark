const express = require("express");
const router = express.Router();
const sabhaController = require("../controllers/sabha");

router.get("/user", sabhaController.handleGetSabhaUserById);
router.put("/:id", sabhaController.handleUpdateSabhaUserById);
router.delete("/:id", sabhaController.handleDeleteSabhaUserById);
router.post("/", sabhaController.handleCreateSabhaNewUser);

module.exports = router;
