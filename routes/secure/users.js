const express = require("express"),
  router = new express.Router(),
  usersController = require("../../controllers/users_controller");

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
