import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

import MyReads from "./MyReads";
import SearchPage from "./SearchPage";

const API = "https://reactnd-books-api.udacity.com/books";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API, { headers: { Authorization: "Eren Yeager" } })
      .then((response) => {
        setBooks(response.data.books);
      });
  }, []);

  function changeShelf(book, moveTo) {
    if (moveTo) {
      const modifiedBooks = books.map((singleBook) => {
        if (singleBook.title === book.title) {
          book.shelf = moveTo;
          return book;
        }
        return singleBook;
      });
      setBooks(modifiedBooks);
    }
  }

  return (
    <div className="app">
      <Routes>
        <Route  path="/"  element={<MyReads books={books} changeShelf={changeShelf} />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
