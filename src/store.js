import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./features/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: BookReducer
  },
});

export default store;
