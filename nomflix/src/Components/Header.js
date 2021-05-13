import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/tv'>tv</Link>
        </li>
        <li>
          <Link to='/search'>search</Link>
        </li>
      </ul>
    </header>
  );
};
