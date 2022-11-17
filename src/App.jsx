import "./App.css";

import axios from 'axios';
import React, {useState,useEffect} from 'react'
import Book from "./Book";


const API = "https://reactnd-books-api.udacity.com/books";




function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books,setBooks] = useState([]);

  useEffect(() => {
    axios.get(API, { headers: { 'Authorization': 'Eren Yeager' }}).then((response) => {

        setBooks(response.data.books);
    })
}, [])

  const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading');
  const wantsToReadBooks = books.filter((book) => book.shelf ==='wantToRead');
  const readBooks = books.filter((book) => book.shelf ==='read');



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

             {/* Currenty Reading Books */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">

                  <ol className="books-grid">
                    {currentlyReadingBooks && currentlyReadingBooks.map((book) => {
                      return <Book title={book.title} authors={book.authors} backgroundImage={book.imageLinks.thumbnail} key={book.id}/>
                    })}
                  </ol>
                </div>
              </div>


             {/* Want To Read Books */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {wantsToReadBooks && wantsToReadBooks.map((book) => {
                      return  <Book title={book.title} authors={book.authors} backgroundImage={book.imageLinks.thumbnail} key={book.id}/>
                    })}
                  </ol>
                </div>
              </div>


             {/* Read Books */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  
                  <ol className="books-grid">
                    {readBooks && readBooks.map((book) => {
                        return  <Book title={book.title} authors={book.authors} backgroundImage={book.imageLinks.thumbnail} key={book.id}/>
                    })}

                  </ol>
                </div>
              </div>
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
