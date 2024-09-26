import { useState } from "react";
import BookCreate from "./components/BookCreate";

export interface Book {
  id: string;
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (title: string) => {
    const uuid = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
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
