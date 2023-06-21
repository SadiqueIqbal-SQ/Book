const Book = require("./bookModel");

//get the book
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error("Error retrieving books:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Get a specific book by ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    console.error("Error retrieving book:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  try {
    const newBook = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publishedYear } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, publishedYear },
      { new: true }
    );
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      res.json(deletedBook);
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Internal Server Error");
  }
};
