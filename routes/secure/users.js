const express = require("express"),
  User = require("../../models/user"),
  router = new express.Router();
const usersController = require("../../controllers/users_controller");

// ***********************************************//
// Login Check
// ***********************************************//
router.post("/loginCheck", async (req, res) => res.sendStatus(200));

// ***********************************************//
// Logout a user
// ***********************************************//
router.delete("/logout", userController.logOut);

// ***********************************************//
// Get current user
// ***********************************************//
router.get("/me", usersController.currentUser);

module.exports = router;
