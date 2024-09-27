import { Book } from "../App";

interface BookShowProps {
  book: Book;
  onDelete: (id: string) => void;
}

function BookShow({ book, onDelete }: BookShowProps) {
  return <div className="book-show">{book.title}</div>;
}

export default BookShow;
