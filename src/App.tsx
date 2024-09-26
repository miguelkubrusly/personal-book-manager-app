import { useState } from "react";
import BookCreate from "./components/BookCreate";

// export interface Book {
//   id: number;
//   title: string;
// }

function App() {
  const [books, setBooks] = useState<Object[]>([]);

  const createBook = (title: string) => {
    const updatedBooks = [...books, { id: books.length + 1, title }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
