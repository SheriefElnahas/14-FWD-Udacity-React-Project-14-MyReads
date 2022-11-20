import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "./Book";


import { search } from "./BooksAPI";

export default function SearchPage(props) {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    try {
      const result =  await search(searchInput);

      // console.log(result);
      if(result.error) {
        throw new Error(result.error);
      }
      setSearchedBooks(result);
  

    } catch(err) {
      setError("There are no search results for this value")
      setSearchInput("")

    }
   console.log(searchedBooks);
  }

  useEffect(() => {
   props.getSearchedBooks(searchedBooks);
 
  }, [ searchedBooks])


  return (
    <form onSubmit={handleSubmit} className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text"   placeholder="Search by title, author, or ISBN"  onChange={(e) => setSearchInput(e.target.value)}  value={searchInput}   />
          <button className="search-btn">Search</button>
          <p className="search-error">{error} </p>
        </div>
      </div>
    {!error ?    <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((book) => {
                
              return (
                <Book changeShelf={props.changeShelf}  book={book} key={book.id} />
              );
            })}
        </ol>
      </div> : error}
   
    </form>
  );
}
