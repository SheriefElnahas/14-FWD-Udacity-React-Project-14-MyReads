import React from "react";
import Shelf from "../components/Shelf";

export default function ({ books }) {
  return (
    <div>
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {books && (
            <Shelf shelfTitle={"Currently Reading"} shelfBooks={books.filter((book) => book.shelf === "currentlyReading"  )} 
              backgroundColor={"#65F0AE"}  />
          )}
          {books && ( <Shelf  shelfTitle={"Want To Read"}  shelfBooks={books.filter((book) => book.shelf === "wantToRead")}
               backgroundColor={"#D9D366"}   />   )}
          {books && (
            <Shelf shelfTitle={"Read"}  shelfBooks={books.filter((book) => book.shelf === "read")}  
               backgroundColor={"#F09665"}  />
          )}
        </div>
      </div>
    </div>
  );
}
