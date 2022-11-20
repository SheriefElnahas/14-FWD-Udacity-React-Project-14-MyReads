// import { useEffect, useState } from "react";
// import axios from "axios";



// function getInitialBooks() {
//   const [initialBooks, setInitialBooks] = useState([]);

//   useEffect(() => {
//     getAll(API, { headers: { Authorization: "Sherief Elnahas" } }).then(
//       (response) => {
//         setInitialBooks(response);
//       }
//     );

//     return () => {
//       console.log("clean up function");
//     };
//   }, []);

//   function changeShelf(book, moveTo) {
//     if (moveTo) {
//       const modifiedBooks = initialBooks.map((singleBook) => {
//         if (singleBook.title === book.title) {
//           book.shelf = moveTo;
//           return book;
//         }
//         return singleBook;
//       });
//       setInitialBooks(modifiedBooks);
//       console.log("from change shelf");
//     }
//   }

//   function addToShelf(book, shelf) {
//     if (shelf) {
//       // console.log(`from initial books ${book.title} - shelf: ${shelf}`)

//       book.shelf = shelf;

//       // setInitialBooks([]);
//       console.log("from add to shelf");
//     }
//   }

//   return { initialBooks, setInitialBooks, changeShelf, addToShelf };
// }

// export default getInitialBooks;
