import { createContext, useEffect, useState } from "react";
import { update, getAll, api } from "../api/BooksAPI";

const BooksContext = createContext();

function Provider({ children }) {
  const [myReadsBooks, setMyReadsBooks] = useState([]);
  const [myReadsLoading, setMyReadsLoading] = useState(false);

  const fetchMyReadsBooks = async () => {
    setMyReadsLoading(true);
    const response = await getAll(`${api}/books}`, {
      headers: { Authorization: "Sherief Elnahas" },
    });
    setMyReadsBooks(response);
    setMyReadsLoading(false);
  };

  const changeShelf = (selectedBook, selectedShelf) => {
    if (selectedShelf) {
      update(selectedBook, selectedShelf).then(() => {
        selectedBook.shelf = selectedShelf;
        let modifiedBooks = myReadsBooks.filter(
          (book) => book.id !== selectedBook.id
        );
        modifiedBooks.push(selectedBook);
        setMyReadsBooks(modifiedBooks);
      });
    }
  };

  const valueToShare = {
    myReadsBooks,
    myReadsLoading,
    fetchMyReadsBooks,
    changeShelf,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
