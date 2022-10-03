import React from "react";
import { useSelector } from "react-redux";

const ListView = () => {
  const books = useSelector((state) => state.bookReducer.book);
  console.log(books);
  return (
    <div>
      <h1>Books of list</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text1.1</td>
            <td>text1.2</td>
            <td>text1.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
