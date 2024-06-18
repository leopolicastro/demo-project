const router = require("express").Router();
const User = require("../../models/user");
const usersController = require("../../controllers/users_controller");

// ***********************************************//
// Login a user
// ***********************************************//
router.post("/login", usersController.logIn);

// ***********************************************//
// Create a user
// ***********************************************//
router.post("/", usersController.signUp);

module.exports = router;
