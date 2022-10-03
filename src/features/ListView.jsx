import React from "react";
import { useSelector } from "react-redux";

const ListView = () => {
  const books = useSelector((state) => state.bookReducer.books);
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
                    <button>Edit</button>
                    <button>Delete</button>
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
