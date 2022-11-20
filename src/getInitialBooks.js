import { useEffect, useState } from "react";
import axios from "axios";
const API = "https://reactnd-books-api.udacity.com/books";

function getInitialBooks() {
    const [initialBooks, setInitialBooks] = useState([]);

    useEffect(() => {
      axios.get(API, { headers: { Authorization: "Sherief Elnahas" } }).then((response) => {
          setInitialBooks(response.data.books);
        });
    }, []);

    function changeShelf(book, moveTo) {
      if (moveTo) {
        const modifiedBooks = initialBooks.map((singleBook) => {
          if (singleBook.title === book.title) {
            book.shelf = moveTo;
            return book;
          }
          return singleBook;
        });
        setInitialBooks(modifiedBooks);
      }
    }
    return {initialBooks, setInitialBooks, changeShelf};
}


export default getInitialBooks;