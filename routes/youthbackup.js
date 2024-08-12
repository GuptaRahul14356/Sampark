const express = require("express");
const {
  handleGetSamparkUserById,
  handleUpdateSamparkUserById,
  HandleDeteleSamparkUserId,
  HandleCreateSamparkNewUser,
} = require("../controllers/dump.js");
const router = express.Router();

// Routes

router.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
      `;
  res.send(html);
});
router
  .route("/api/users/:id")
  .get(handleGetSamparkUserById)
  .patch(handleUpdateSamparkUserById)
  .delete(HandleDeteleSamparkUserId);
router.post("/api/users", HandleCreateSamparkNewUser);

module.exports = router;
