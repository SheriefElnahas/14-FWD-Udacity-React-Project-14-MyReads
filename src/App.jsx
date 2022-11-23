// CSS & React
import "./App.css";
import React, { useEffect } from "react";

// Router & Routes
import { Routes, Route, Link } from "react-router-dom";
import MyReads from "./pages/MyReads";
import SearchPage from "./pages/SearchPage";

// Context
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const { fetchMyReadsBooks, myReadsBooks, myReadsLoading } = useBooksContext();

  useEffect(() => {
    fetchMyReadsBooks();
  }, []);

  return (
    <div className="app">
      {myReadsLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<MyReads myReadsBooks={myReadsBooks} />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      )}

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
