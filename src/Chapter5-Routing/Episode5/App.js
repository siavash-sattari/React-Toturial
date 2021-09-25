import React from "react";

import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Route from "./router/Route";
import Link from "./router/Link";

function App() {
  return (
    <>
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

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </>
  );
}

export default App;
