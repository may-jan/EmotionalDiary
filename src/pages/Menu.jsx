import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="MenuTab">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
        <li>
          <Link to="/diary">Diary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
