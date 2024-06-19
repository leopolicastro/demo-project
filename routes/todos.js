const express = require("express");
const router = express.Router();
const todos = require("../db/todos");

router.get("/", function (req, res) {
  res.json(todos);
});

module.exports = router;
