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
    addBook: (state) => state,
  },
});

export const { addBook } = BookSlice.actions;
export default BookSlice.reducer;
