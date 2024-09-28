import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios, { AxiosPromise, AxiosResponse, HttpStatusCode } from "axios";
import { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: AxiosResponse = await axios.get(
      "http://localhost:3001/books"
    );
    setBooks(response.data);
  };

  const createBook = async (title: string) => {
    const response: AxiosResponse = await axios.post(
      "http://localhost:3001/books",
      { title }
    );
    const updatedBooks: Book[] = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks: Book[] = books.filter((book: Book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newTitle: string) => {
    const response: AxiosResponse = await axios.put(
      `http://localhost:3001/books/${id}`,
      {
        title: newTitle,
      }
    );
    const updatedBooks: Book[] = books.map((book: Book) => {
      if (response.data.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
