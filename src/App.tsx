import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookCreate from "./components/BookCreate";

// export interface Book {
//   id: number;
//   title: string;
// }

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title: string) => {
    console.log("creating book with title", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
