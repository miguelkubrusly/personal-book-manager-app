import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export interface Book {
  id: string;
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (title: string) => {
    const uuid: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
    const updatedBooks: Book[] = [...books, { id: uuid, title }];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };

  const deleteBookById = (id: string) => {
    const updatedBooks: Book[] = books.filter((book: Book) => {
      book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
