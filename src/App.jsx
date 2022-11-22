// CSS & React
import "./App.css";
import React, { useState, useEffect } from "react";

// Router & Routes
import { Routes, Route, Link } from "react-router-dom";
import MyReads from "./pages/MyReads";
import SearchPage from "./pages/SearchPage";

// Context
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const {fetchBooks, books ,setBooks, isLoading} = useBooksContext();

  useEffect(() => {
    fetchBooks();
  },[])



  function getSearchedBooks(searchedBooks) {
    const modifiedBooks = searchedBooks.map((singleBook) => {
      books.forEach((book) => {
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
          <Route path="/"  element={<MyReads books={books}  />}/>
          <Route path="/search" element={ <SearchPage  getSearchedBooks={getSearchedBooks}/> } />  </Routes>
      )}

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
