const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Note", noteSchema);
