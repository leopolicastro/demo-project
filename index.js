const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 8080;
const todos = require("./db/todos");

app.use(morgan("dev"));
app.use(express.json());

// Step 4: Build APIS
app.get("/", function (req, res) {
  res.send("Welcome to my class!");
});

// /todos
app.get("/todos", function (req, res) {
  res.json(todos);
});

// Step 3 : Listening to a port
app.listen(port, function () {
  console.log("Server running on http://localhost:" + port);
});
