import React from "react";
import ShelfChanger from "./ShelfChanger";
export default function Book(props) {
  const defaultImage =
    "https://image.shutterstock.com/image-vector/no-image-available-icon-fow-260nw-1690416772.jpg";
  const bookStyle = {
    // backgroundImage: `url("${defaultImage}")`,
    backgroundImage: `url("${
      props.book.imageLinks ? props.book.imageLinks.thumbnail : defaultImage
    }")`,

    backgroundSize: "contain",
  };

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={bookStyle}></div>
            <ShelfChanger
              changeShelf={props.changeShelf}
              shelf={props.book.shelf}
              book={props.book}
            />
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">
            {props.book.authors && props.book.authors.join(" ")}
          </div>
        </div>
      </li>
    </div>
  );
}
