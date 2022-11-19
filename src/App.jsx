import "./App.css";

import axios from 'axios';
const API = "https://reactnd-books-api.udacity.com/books";
import React, {useState,useEffect} from 'react';


import Shelf from "./Shelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books,setBooks] = useState([]);



  useEffect(() => {
    axios.get(API, { headers: { 'Authorization': 'Eren Yeager' }}).then((response) => {
        setBooks(response.data.books);
    })
}, [])


  function changeShelf(book, moveTo) {
    if(moveTo) {
      const modifiedBooks = books.map((singleBook) => {
        if(singleBook.title === book.title) {

          book.shelf = moveTo;
          return book;
        }
        return singleBook;
      })
      setBooks(modifiedBooks);
    }
  }

  return (
    <div className="app">
      {
      showSearchPage ? ( 
      <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search"  onClick={() => setShowSearchpage(!showSearchPage)} > Close </a>
            <div className="search-books-input-wrapper">
              <input  type="text"  placeholder="Search by title, author, or ISBN" /></div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        // Books Start
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {books && < Shelf  shelfBooks={books.filter((book) => book.shelf === 'currentlyReading')} changeShelf={changeShelf} />}
              {books && < Shelf  shelfBooks={books.filter((book) => book.shelf === 'wantToRead')} changeShelf={changeShelf} />}
              {books && < Shelf  shelfBooks={books.filter((book) => book.shelf === 'read')} changeShelf={changeShelf} />}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
