import BookShow from "./BookShow";
import { Book } from "../types";

function BookList({
  books,
  onDelete,
  onEdit,
}: {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}) {
  const renderedBooks = books.map((book: Book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
