import React from "react";
import Book from "./Book";

export default function Shelf({shelfBooks, changeShelf, shelfTitle}) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { shelfBooks.map((book) => {
              return (
                <Book changeShelf={changeShelf} book={book} key={book.id}  />
              );
            })}
        </ol>
      </div>
    </div>
  );
}
