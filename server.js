const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to my API Server" });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`API Server started on port: ${port}`);
});
