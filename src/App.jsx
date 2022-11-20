import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import React from "react";

import MyReads from "./MyReads";
import SearchPage from "./SearchPage";
import getInitialBooks from './getInitialBooks';

function App() {
  const {initialBooks, setInitialBooks, changeShelf} = getInitialBooks();

  return (
    <div className="app">
      <Routes>
        <Route  path="/"  element={<MyReads books={initialBooks} changeShelf={changeShelf} />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
