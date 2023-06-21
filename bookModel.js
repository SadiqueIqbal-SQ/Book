const mongoose = require("mongoose");

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
});

// Create and export the book model
module.exports = mongoose.model("Book", bookSchema);
