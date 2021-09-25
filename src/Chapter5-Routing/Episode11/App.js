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
        <li>
          <Link to="/render">Render</Link>
        </li>
        <li>
          <Link to="/children">children</Link>
        </li>
      </ul>
      <Route path="/children" children={() => <h1>children</h1>} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={Blog} />
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/render" render={() => <h1>render</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

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
    <li>
      <Link to="/render">Render</Link>
    </li>
  </ul>
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/blog" component={Blog} />
    <Route path="/auth">
      <Auth />
    </Route>
    <Route path="/render" render={() => <h1>render</h1>} />
  </Switch>
</BrowserRouter>;
