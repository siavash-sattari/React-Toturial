import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path="/blogs/:author" render={(props) => <Blogs name="John" {...props} />} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={AboutUs} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
