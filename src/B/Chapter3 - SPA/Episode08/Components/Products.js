import React from "react";
import {Link} from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Products :</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
        <li>
          <Link to="/products/4">Product 4</Link>
        </li>
      </ul>
    </div>
  );
}
