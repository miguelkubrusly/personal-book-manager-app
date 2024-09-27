import BookShow from "./BookShow";
import { Book } from "../App";

function BookList({
  books,
  onDelete,
  onEdit,
}: {
  books: Book[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}) {
  const renderedBooks = books.map((book: Book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
