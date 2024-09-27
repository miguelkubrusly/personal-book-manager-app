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

  let content: JSX.Element = <h3>{book.title}</h3>;

  if (edit) {
    content = <BookEdit book={book} onEdit={onEdit} />;
  }

  return (
    <div className="book-show">
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
