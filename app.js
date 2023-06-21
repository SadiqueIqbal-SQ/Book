const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes");

const app = express();
const uri = "mongodb+srv://sadiqueiqbal:sadiq786@book.zn981n6.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
