import {
  ChangeEvent,
  FormEvent,
  FocusEvent,
  useState,
  useContext,
} from "react";
import { BookEditProps } from "../types";
import BooksContext from "../context/books";

function BookEdit({ book, onEdit }: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEdit();
    editBookById!(book.id!, title);
  };

  const autoSelect = (event: FocusEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).select();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="book-title">Title</label>
      <input
        className="input"
        value={title}
        onChange={handleChange}
        autoFocus
        onFocus={autoSelect}
        name="book-title"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
