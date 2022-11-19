import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "./Book";



import {search} from './BooksAPI';


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



export default function SearchPage() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      search(searchInput).then((response) => {
       
        setSearchedBooks(response);
      })
    }


  return (
    <form onSubmit={handleSubmit}  className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
        {searchedBooks && searchedBooks.map((book) => {
           return <Book changeShelf={changeShelf}  book={book} key={book.id}  />
        })}
        </ol>
      </div>
    </form>
  );
}
