import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "../components/Book";

import { search } from "../api/BooksAPI";

// Context
import useBooksContext from "../hooks/useBooksContext";

import useDebounce from "../hooks/useDebounce";

export default function SearchPage(props) {
  const { myReadsBooks } = useBooksContext();
  const [booksFromSearch, setbooksFromSearch] = useState([]);

  // Search Input & Debounce Hooks
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [compinedBooks, setCompinedBooks] = useState([]);
  const debouncedSearch = useDebounce(searchInput, 300);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (debouncedSearch) {
          setError("");
          const result = await search(debouncedSearch);

          setbooksFromSearch(result);

          if (result.error) {
            throw new Error(result.error);
          }
        }
      } catch (err) {
        setError("There are no search results for this value");
        setSearchInput("");
      }
    }

    if (debouncedSearch === "") {
      setbooksFromSearch([]);
    }

    fetchData();
  }, [debouncedSearch]);

  useEffect(() => {
    if (booksFromSearch.length > 0) {
      const compareBooks = () => {
        const modifiedBooks = booksFromSearch.map((singleBook) => {
          myReadsBooks.forEach((book) => {
            if (book.title === singleBook.title) {
              singleBook.shelf = book.shelf;
            }
            return book;
          });
          return singleBook;
        });
        return modifiedBooks;
      };

      setCompinedBooks(compareBooks());
    }
  }, [booksFromSearch]);

  return (
    <div className="SearchPage">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleInputChange}
            value={searchInput}
          />

          <p className="search-error">{error} </p>
        </div>
      </div>
      {!error ? (
        <div className="search-books-results">
          <ol className="books-grid">
            {booksFromSearch &&
              booksFromSearch.map((book) => {
                // book.shelf = 'none';
                // console.log(book.shelf)
                if (book.shelf === undefined) {
                  book.shelf = "none";
                }
                return <Book book={book} key={book.id} />;
              })}
          </ol>
        </div>
      ) : (
        error
      )}
    </div>
  );
}
