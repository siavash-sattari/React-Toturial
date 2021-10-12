import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import LogViewPage from "./pages/LogViewPage";

function App() {
  return (
    <BrowserRouter>
    <LogViewPage />
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
        <li>
          <Link to="/posts/sample-post">Sample Post</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/posts/:slug">
          <Post />
        </Route>
        <Route path="/blog" component={Blog} />
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
