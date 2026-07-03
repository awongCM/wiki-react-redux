const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Wiki = require("./models/Wiki");

const app = express();
const port = process.env.PORT || 3001;
const mongoUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wiki-react-redux";
const useInMemoryDb = process.env.USE_IN_MEMORY_DB === "true";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Wiki React Redux API" });
});

router.get("/wikis", async (req, res) => {
  try {
    const wikis = await Wiki.find().sort({ createdAt: -1 });
    res.json(wikis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/wikis/:id", async (req, res) => {
  try {
    const wiki = await Wiki.findById(req.params.id);
    if (!wiki) {
      return res.status(404).json({ error: "Wiki not found" });
    }
    res.json(wiki);
  } catch (error) {
    res.status(400).json({ error: "Invalid wiki id" });
  }
});

router.post("/wikis", async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const wiki = await Wiki.create({
      title,
      content,
      author,
      tags: tags || []
    });
    res.status(201).json(wiki);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/wikis/:id", async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const wiki = await Wiki.findByIdAndUpdate(
      req.params.id,
      { title, content, author, tags: tags || [] },
      { new: true, runValidators: true }
    );
    if (!wiki) {
      return res.status(404).json({ error: "Wiki not found" });
    }
    res.json(wiki);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/wikis/:id", async (req, res) => {
  try {
    const wiki = await Wiki.findByIdAndDelete(req.params.id);
    if (!wiki) {
      return res.status(404).json({ error: "Wiki not found" });
    }
    res.json({ message: "Wiki deleted", id: req.params.id });
  } catch (error) {
    res.status(400).json({ error: "Invalid wiki id" });
  }
});

app.use("/api", router);

async function connectDatabase() {
  if (useInMemoryDb) {
    const { MongoMemoryServer } = require("mongodb-memory-server");
    const memoryServer = await MongoMemoryServer.create();
    const uri = memoryServer.getUri();
    await mongoose.connect(uri);
    console.log("Connected to in-memory MongoDB");
    return;
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`API server started on port: ${port}`);
    });
  })
  .catch(error => {
    console.error("Failed to connect to MongoDB:", error.message);
    console.error(
      "Tip: start MongoDB locally or run with USE_IN_MEMORY_DB=true"
    );
    process.exit(1);
  });
