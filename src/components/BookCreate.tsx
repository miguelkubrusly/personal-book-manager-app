import { useState, ChangeEvent, FormEvent } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");

  const { createBook } = useBooksContext();

  const formatTitle = (title: string) => {
    let formattedTitle: string = "";

    const titleArr = title.trim().split(" ");
    if (titleArr.length === 0) {
      return "";
    }
    const capitalizedArr = titleArr.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    capitalizedArr.length === 1
      ? (formattedTitle = capitalizedArr[0])
      : (formattedTitle = capitalizedArr.join(" "));

    return formattedTitle;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBook!(formatTitle(title)!);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
