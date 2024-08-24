const express = require("express");
const router = express.Router();
const youthController = require("../controllers/youth");

router.get("/users", youthController.handleGetYouthAllUsersName);
router.get("/", youthController.handleGetYouthUserById);
router.put("/:id", youthController.handleUpdateYouthkUserById);
router.delete("/:id", youthController.HandleDeteleYouthUserId);
router.post("/", youthController.HandleCreateYouthNewUser);

module.exports = router;
