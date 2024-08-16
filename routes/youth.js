const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youth");

router.get("/user", youthController. handleGetSamparkUserById);
router.get("/update/user", youthController. handleUpdateSamparkUserById);
router.get("/delete/user", youthController. HandleDeteleSamparkUserId);
router.get("/create/user", youthController. HandleCreateSamparkNewUser);

module.exports = router;
