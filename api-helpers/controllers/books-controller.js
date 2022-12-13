import Book from "../models/Book";

export const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    return new Error(err);
  }

  if (!books) {
    return res.status(500).json({ message: "Interval Server Error" });
  }

  if (books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};
