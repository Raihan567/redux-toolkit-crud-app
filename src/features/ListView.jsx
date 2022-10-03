import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BookSlice";

const ListView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h1>Books of list</h1>
      <table>
        <thead>
          <tr>
            <th>Title:</th>
            <th>Author:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id + title}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

// 1. Read [done]
// 2. Create [done]
// 3. Delete
// 4. Update
// CRUD --> create, Read, update, delete
export default ListView;
