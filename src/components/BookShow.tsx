import { useContext, useState } from "react";
import { BookProp } from "../types";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }: BookProp) {
  const [edit, SetEdit] = useState<boolean>(false);

  const { editBookById, deleteBookById } = useContext(BooksContext);

  const editClick = () => {
    SetEdit(!edit);
  };

  const handleEdit = (id: number, newTitle: string) => {
    editClick();
    editBookById!(id, newTitle);
  };

  const deleteClick = () => {
    deleteBookById!(book.id!);
  };

  let content: JSX.Element = <h3>{book.title}</h3>;

  if (edit) {
    content = <BookEdit book={book} onEdit={handleEdit} />;
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
