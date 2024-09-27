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
    const updatedBooks: Book[] = books.filter((book: Book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (id: string, newTitle: string) => {
    const updatedBooks: Book[] = books.map((book: Book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
