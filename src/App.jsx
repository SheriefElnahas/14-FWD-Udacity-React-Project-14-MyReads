import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MyReads from "./MyReads";
import SearchPage from "./SearchPage";


const API = "https://reactnd-books-api.udacity.com/books";
import { update, getAll } from "./BooksAPI";



function App() {
  const [ initialBooks, setInitialBooks] = useState([]);

  useEffect(() => {
    getAll(API, { headers: { Authorization: "Sherief Elnahas" } }).then(
      (response) => {
        setInitialBooks(response);
      }
    );

    return () => {
      console.log("clean up function");
    };
  }, []);

  function changeShelf(book, moveTo) {
    if (moveTo) {
      const modifiedBooks = initialBooks.map((singleBook) => {
        if (singleBook.title === book.title) {
          book.shelf = moveTo;
          return book;
        }
        return singleBook;
      });
      setInitialBooks(modifiedBooks);
      console.log("from change shelf");
      update(book,moveTo);
    }
  }



  return (
    <div className="app">
      <Routes>
        <Route  path="/"  element={<MyReads books={initialBooks} changeShelf={changeShelf}  />} />
        <Route path="/search" element={<SearchPage changeShelf={changeShelf}  />} />
      </Routes>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
