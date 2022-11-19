import React from "react";

import Book from "./Book";

export default function Shelf(props) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfBooks[0] && props.shelfBooks[0].shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { props.shelfBooks.map((book) => {
              return (
                <Book changeShelf={props.changeShelf} book={book} key={book.id} />
              );
            })}
        </ol>
      </div>
    </div>
  );
}
