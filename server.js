const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API Server" });
});

app.listen(port, () => {
  console.log(`API Server started on port: ${port}`);
});
