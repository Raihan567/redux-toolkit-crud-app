import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Self motivated",
      author: "Abu Raihan",
    },
    {
      id: 2,
      title: "Learners Guide",
      author: "Abu Raihan",
    },
    {
      id: 3,
      title: "Motivated to improve performance",
      author: "Abu Raihan",
    },
  ],
};

const BookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, author, title } = action.payload;
      const isExist = state.books.filter((book) => book.id == id);
      if (isExist) {
        isExist[0].title = title;
        isExist[0].author = author;
      }
    },
  },
});

export const { showBook, addBook, deleteBook, updateBook } = BookSlice.actions;
export default BookSlice.reducer;
