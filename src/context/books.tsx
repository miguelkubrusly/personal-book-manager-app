import axios, { AxiosResponse } from "axios";
import { Book, BooksAndLogic } from "../types";
import React, { createContext, useCallback, useState } from "react";

const BooksContext = createContext<BooksAndLogic>({});

export function Provider({ children }: React.PropsWithChildren) {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchData = useCallback(async () => {
    const response: AxiosResponse = await axios.get(
      "http://localhost:3001/books"
    );
    setBooks(response.data);
  }, []);

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
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const booksAndLogic: BooksAndLogic = {
    books,
    fetchData,
    createBook,
    deleteBookById,
    editBookById,
  };

  return (
    <BooksContext.Provider value={booksAndLogic}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
