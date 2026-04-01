const Book = require("../models/book");

exports.borrowBook = async (req, res) => {
  try {
    const { studentId, attendantId, returnDate } = req.body;
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(400).json({ message: "book not found" });
    }
    if (book.status == "OUT") {
      return res.status(400).json({ message: "book is already out" });
    }

    book.status = "OUT";
    book.borroowBy = studentId;
    book.issueBy = attendantId;
    book.returnDate = returnDate;

    await book.save();

    return res.status(200).json({ message: "book borrowed successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.mssage });
  }
};
