import React from "react";
import ShelfChanger from "./ShelfChanger";
export default function Book(props) {
  const bookStyle = {
    backgroundImage: `url("${props.backgroundImage}")`,    
}
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={bookStyle}
            ></div>
         < ShelfChanger />
          </div>
          <div className="book-title">{props.title}</div> 
          <div className="book-authors">{props.authors.join(" ")}</div>
        </div>
      </li>
    </div>
  );
}
