export interface Book {
  id?: number;
  title: string;
}

export interface BookEditProps {
  book: Book;
  onSubmit: (id: number, newTitle: string) => void;
}

export interface BookCreateProps {
  onCreate: (title: string) => void;
}

export interface BookShowProps {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}