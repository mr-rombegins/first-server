const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Victor</h1>");
});

app.get("/greet", (req, res) => {
  res.send("<h1>Hello!, Everyone</h1>");
});

app.listen(4000, () => {
  console.log("Server up and running");
});
