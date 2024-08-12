const express = require("express");
const { connectMongoDb } = require("../db/mongo.js");
const {
  handleGetSabhaUserById,
  handleUpdateSabhaUserById,
  handleDeleteSabhaUserById,
  handleCreateSabhaNewUser,
} = require("../controllers/dump");
const router = express.Router();

router
  .route("/api/users/:id")
  .get(handleGetSabhaUserById)
  .patch(handleUpdateSabhaUserById)
  .delete(handleDeleteSabhaUserById);
router.post("/api/users", handleCreateSabhaNewUser);

module.exports = router;
