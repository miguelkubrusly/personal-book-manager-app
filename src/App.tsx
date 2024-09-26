import { useState } from "react";
import BookCreate from "./components/BookCreate";
import crypto from "crypto-random-string";

export interface Book {
  id: string;
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (title: string) => {
    const uuid: string = crypto(16);
    const updatedBooks: Book[] = [...books, { id: uuid, title }];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
