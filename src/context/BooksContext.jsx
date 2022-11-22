import {createContext, useState} from "react";


const API = "https://reactnd-books-api.udacity.com/books";
import { update, getAll } from "../api/BooksAPI";



const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBooks = async () => {
        setIsLoading(true);
        const response = await getAll( API,{ headers: { Authorization: "Sherief Elnahas" } })

        setBooks(response);
        setIsLoading(false);
      
    }

    function changeShelf(book, moveTo) {
        if (moveTo) {
          const modifiedBooks = books.map((singleBook) => {
            if (singleBook.title === book.title) {
              book.shelf = moveTo;
              return book;
            }
            return singleBook;
          });
          setBooks(modifiedBooks);
        //   update(book, moveTo);
        }
      }

      function getSearchedBooks(searchedBooks) {
        const modifiedBooks = searchedBooks.map((singleBook) => {
          books.forEach((book) => {
            if (book.title === singleBook.title) {
              singleBook.shelf = book.shelf;
            }
          });
          return singleBook;
        });
        return modifiedBooks;
        // I should update the existing search books results at this point ???!!
      }


      const valueToShare = {
        books,
        isLoading,
        fetchBooks,
        changeShelf,
        getSearchedBooks,
        setBooks
      }

      return (
        <BooksContext.Provider value={valueToShare} >
            {children}
        </BooksContext.Provider>
      )
}

export { Provider }
export default BooksContext;