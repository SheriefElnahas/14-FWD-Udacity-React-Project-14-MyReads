import React from "react";
import Shelf from "../components/Shelf";

export default function ({ myReadsBooks }) {
  return (
    <div>
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {myReadsBooks && (
            <Shelf
              shelfTitle={"Currently Reading"}
              shelfBooks={myReadsBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              backgroundColor={"#65F0AE"}
            />
          )}
          {myReadsBooks && (
            <Shelf
              shelfTitle={"Want To Read"}
              shelfBooks={myReadsBooks.filter(
                (book) => book.shelf === "wantToRead"
              )}
              backgroundColor={"#D9D366"}
            />
          )}
          {myReadsBooks && (
            <Shelf
              shelfTitle={"Read"}
              shelfBooks={myReadsBooks.filter((book) => book.shelf === "read")}
              backgroundColor={"#F09665"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
