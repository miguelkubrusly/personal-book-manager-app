export interface Book {
  id?: number;
  title: string;
}

export interface BookEditProps {
  book: Book;
  onEdit: () => void;
}

// export interface BookCreateProps {
//   onCreate: (title: string) => void;
// }

export interface BookProp {
  book: Book;
}

export interface BooksProp {
  books: Book[];
}

export interface BooksAndLogic {
  books?: Book[],
  fetchData?: () => void,
  createBook?: (title: string) => void,
  deleteBookById?: (id: number) => void,
  editBookById?: (id: number, newTitle: string) => void
}   