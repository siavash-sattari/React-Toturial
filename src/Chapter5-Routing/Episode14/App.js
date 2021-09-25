import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">HomaPage</Link>
        </li>
        <li>
          <Link to="/blog/5">Blog</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/posts/sample-post">Sample Post</Link>
        </li>
        <li>
          <Link to="/posts/sample-post/5">Sample Post 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/posts/:slug/:id">
          <Post />
        </Route>
        <Route path="/blog/:id" component={Blog} />
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
