import BookShow from "./BookShow";
import { Book } from "../types";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books!.map((book: Book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
