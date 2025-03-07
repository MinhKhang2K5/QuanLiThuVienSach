const db = require('../config/database/dbconnect.js');

const Book = {
  getAllBooks: (callback) => {
    const query = 'SELECT * FROM books';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
  getBookDetails: (BookID, callback) => {
    const query = 'SELECT * FROM books WHERE BookID = ?';
    db.query(query, [BookID], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  },  
  createBook: (bookData, callback) => {
    const { Title, Author, Publisher, Year, CategoryID, Status, Price, Quantity } = bookData;
    const query = 'INSERT INTO Book (Title, Author, Publisher, Year, CategoryID, Status, Price, Quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [Title, Author, Publisher, Year, CategoryID, Status, Price, Quantity], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  updateBook: (BookID, bookData, callback) => {
    const { Title, Author, Publisher, Year, CategoryID, Status, Price, Quantity } = bookData;
    const query = 'UPDATE Book SET Title = ?, Author = ?, Publisher = ?, Year = ?, CategoryID = ?, Status = ?, Price = ?, Quantity = ? WHERE BookID = ?';
    db.query(query, [Title, Author, Publisher, Year, CategoryID, Status, Price, Quantity, BookID], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
  deleteBook: (BookID, callback) => {
    const query = 'DELETE FROM Book WHERE BookID = ?';
    db.query(query, [BookID], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};

module.exports = Book;
