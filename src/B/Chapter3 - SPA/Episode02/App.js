import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><a href="/">HomePage</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">AboutUs</a></li>
        </ul>
        <div>
          <Route path="/" component={HomePage} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={AboutUs} />
        </div>
      </div>
    </BrowserRouter>
  );
}
