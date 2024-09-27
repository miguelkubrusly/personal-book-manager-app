import { Book } from "../App";

interface BookShowProps {
  book: Book;
  onDelete: (id: string) => void;
}

function BookShow({ book, onDelete }: BookShowProps) {
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
