import BookShow from "./BookShow";
import { Book } from "../App";

function BookList({
  books,
  onDelete,
}: {
  books: Book[];
  onDelete: (id: string) => void;
}) {
  const renderedBooks = books.map((book: Book) => (
    <div>
      <BookShow key={book.id} book={book} onDelete={onDelete} />
    </div>
  ));

  return <div>{renderedBooks}</div>;
}

export default BookList;
