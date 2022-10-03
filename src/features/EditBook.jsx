import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const locations = useLocation();
  const [id, setId] = useState(locations.state.id);
  const [title, setTitle] = useState(locations.state.title);
  const [author, setAuthor] = useState(locations.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h1>Edit books</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default EditBook;
