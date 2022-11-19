import React from 'react'
import Shelf from "./Shelf";

export default function ({books,changeShelf}) {
  return (
    <div>
    <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
             <div className="list-books-content">
             <div>
               {books && < Shelf shelfTitle={"Currently Reading"}  shelfBooks={books.filter((book) => book.shelf === 'currentlyReading')} changeShelf={changeShelf} />}
               {books && < Shelf shelfTitle={"Want To Read"} shelfBooks={books.filter((book) => book.shelf === 'wantToRead')} changeShelf={changeShelf} />}
               {books && < Shelf  shelfTitle={"Read"} shelfBooks={books.filter((book) => book.shelf === 'read')} changeShelf={changeShelf} />}
             </div>
           </div>
            </div>
  )
}
