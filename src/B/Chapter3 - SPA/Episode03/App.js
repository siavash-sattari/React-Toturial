import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={AboutUs} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
