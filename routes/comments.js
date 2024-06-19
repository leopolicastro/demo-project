const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json([{ id: 1, body: "This is a comment" }]);
});

router.post("/", function (req, res) {
  res.json(req.body);
});

module.exports = router;
