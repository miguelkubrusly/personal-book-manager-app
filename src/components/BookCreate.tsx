import { useState, ChangeEvent, FormEvent } from "react";

export interface BookCreateProps {
  onCreate: (title: string) => void;
}

function BookCreate({ onCreate }: BookCreateProps) {
  const [title, setTitle] = useState("");

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
    onCreate(formatTitle(title)!);
    setTitle("");
  };

  return (
    <div>
      <form className="book-create" onSubmit={handleSubmit}>
        <label>Title</label>
        <input onChange={handleChange} value={title} />
      </form>
    </div>
  );
}

export default BookCreate;
