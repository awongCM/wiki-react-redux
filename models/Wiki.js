const mongoose = require("mongoose");

const wikiSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Wiki", wikiSchema);
