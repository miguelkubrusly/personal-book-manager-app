import { ChangeEvent, FormEvent, FocusEvent, useState } from "react";
import { BookEditProps } from "../types";

function BookEdit({ book, onSubmit }: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(book.id!, title);
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
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
