import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MyReads from "./MyReads";
import SearchPage from "./SearchPage";

const API = "https://reactnd-books-api.udacity.com/books";
import { update, getAll } from "./BooksAPI";

function App() {
  const [initialBooks, setInitialBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    getAll(
      API,
      { headers: { Authorization: "Sherief Elnahas" } },
      { signal: controller.signal }
    ).then((response) => {
      setInitialBooks(response);
      setIsLoading(false);
    });

    return () => {
      controller.abort();
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
      update(book, moveTo);
    }
  }

  function getSearchedBooks(searchedBooks) {
    const modifiedBooks = searchedBooks.map((singleBook) => {
      initialBooks.forEach((book) => {
        if (book.title === singleBook.title) {
          singleBook.shelf = book.shelf;
        }
      });
      return singleBook;
    });
    return modifiedBooks;
    // I should update the existing search books results at this point ???!!
  }

  return (
    <div className="app">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<MyReads books={initialBooks} changeShelf={changeShelf} />}
          />
          <Route
            path="/search"
            element={
              <SearchPage
                changeShelf={changeShelf}
                getSearchedBooks={getSearchedBooks}
              />
            }
          />
        </Routes>
      )}

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
