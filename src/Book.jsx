import React from "react";
import ShelfChanger from "./ShelfChanger";
export default function Book(props) {

  const bookStyle = {
    backgroundImage: `url("${props.book.imageLinks.thumbnail}")`,    
}

// backgroundImage - shelf -title - authors

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={bookStyle}
            ></div>
         < ShelfChanger changeShelf={props.changeShelf} shelf={props.book.shelf} book={props.book}  />
          </div>
          <div className="book-title">{props.book.title}</div> 
          <div className="book-authors">{props.book.authors && props.book.authors.join(" ")}</div>
        </div>
      </li>
    </div>
  );
}
