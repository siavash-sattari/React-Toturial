import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">HomaPage</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
