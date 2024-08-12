const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youth");

router.get("/", youthController.getAllYouths);

module.exports = router;
