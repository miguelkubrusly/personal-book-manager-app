import { useState } from "react";
import { BookShowProps } from "../types";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }: BookShowProps) {
  const [edit, SetEdit] = useState<boolean>(false);

  const editClick = () => {
    SetEdit(!edit);
  };

  const deleteClick = () => {
    onDelete(book.id!);
  };

  const handleSubmit = (id: number, newTitle: string) => {
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
