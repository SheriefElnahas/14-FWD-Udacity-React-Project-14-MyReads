import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MyReads from "./MyReads";
import SearchPage from "./SearchPage";


const API = "https://reactnd-books-api.udacity.com/books";
import { update, getAll } from "./BooksAPI";



function App() {
  const [ initialBooks, setInitialBooks] = useState([]);
  // const [bookFromSearch, setBooksFromSearch] = useState([]);

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
      // update(book,moveTo);
    }
  }

  function getSearchedBooks(searchedBooks, setSearchBooks) {
    console.log(searchedBooks);
    console.log(initialBooks);
   const modifiedBooks=  searchedBooks.map((singleBook) => {
      initialBooks.forEach((book) => {
        if(book.title === singleBook.title) {
          console.log(book.title, singleBook.title);
          singleBook.shelf = book.shelf
        }
   
      })
      return singleBook;
    })
    console.log(modifiedBooks);
    
  }




  return (
    <div className="app">
      <Routes>
        <Route  path="/"  element={<MyReads books={initialBooks} changeShelf={changeShelf}  />} />
        <Route path="/search" element={<SearchPage changeShelf={changeShelf}  getSearchedBooks={ getSearchedBooks} />} />
      </Routes>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
