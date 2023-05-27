import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">MindSketch</Link>
      </div>
      <div className="items">
        <Link className="item" to="/create">
          Create
        </Link>
        <Link className="item" to="/saved">
          Saved Images
        </Link>
        <Link className="button" to="/signup">
          Connect
        </Link>
        {/* <Link className="button">Logout</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
