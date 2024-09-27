import { useState } from "react";
import { Book } from "../App";
import BookEdit from "./BookEdit";

interface BookShowProps {
  book: Book;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

function BookShow({ book, onDelete, onEdit }: BookShowProps) {
  const [edit, SetEdit] = useState<boolean>(false);

  const editClick = () => {
    SetEdit(!edit);
  };

  const deleteClick = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id: string, newTitle: string) => {
    editClick();
    onEdit(id, newTitle);
  };

  let content: JSX.Element = <h3>{book.title}</h3>;

  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={editClick}>
          Edit
        </button>
        <button className="delete" onClick={deleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
