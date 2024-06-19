// Step 1 : Install Express
const express = require("express");
const morgan = require("morgan");
// Step 2 : Instantaite Express
const app = express();
const cors = require("cors");
const commentRoutes = require("./routes/comments");
const todoRoutes = require("./routes/todos");

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use((req, res, next) => {
  if (req.query.apiKey !== "supersecretpassword") {
    res.status(401).json({ message: "Not authorized" });
  }

  next();
});

// Step 3: Build APIS
app.get("/", function (req, res) {
  res.send("Welcom to my class!");
});

app.use("/todos", todoRoutes);
app.use("/comments", commentRoutes);

// Step 4 : Listening to a port
app.listen(port, function () {
  console.log("Server running on http://localhost:" + port);
});
