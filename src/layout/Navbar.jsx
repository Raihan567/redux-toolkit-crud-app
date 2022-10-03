import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/show-books">
          Show book
        </Link>
        <Link className="nav-link" to="/add-books">
          Add book
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
