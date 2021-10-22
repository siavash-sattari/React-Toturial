import React from "react";
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path="/blogs/:author?" render={(props) => <Blogs name="John" {...props} />} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={AboutUs} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/articles" to="/blogs" />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
