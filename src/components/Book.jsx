import React from "react";
import ShelfChanger from "./ShelfChanger";
export default function Book({book}) {
  const defaultImage =
    "https://image.shutterstock.com/image-vector/no-image-available-icon-fow-260nw-1690416772.jpg";
  const bookStyle = {
  
    backgroundImage: `url("${
      book.imageLinks ? book.imageLinks.thumbnail : defaultImage
    }")`,

    backgroundSize: "contain",
  };

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={bookStyle}></div>
            <ShelfChanger     shelf={book.shelf}       book={book}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.join(" ")}
          </div>
        </div>
      </li>
    </div>
  );
}
