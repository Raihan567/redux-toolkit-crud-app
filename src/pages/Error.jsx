import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404! Page not fount</h1>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default Error;
