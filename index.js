// Step 1 : Install Express
const express = require("express");
// Step 2 : Instantaite Express
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 8080;
const todos = require("./db/todos");

app.use(morgan("dev"));
app.use(express.json());

// Step 3: Build APIS
app.get("/", function (req, res) {
  res.send("Welcome to my class!");
});

app.get("/todos", function (req, res) {
  res.json(todos);
});

// Step 4 : Listening to a port
app.listen(port, function () {
  console.log("Server running on http://localhost:" + port);
});
