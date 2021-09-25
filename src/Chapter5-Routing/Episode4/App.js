import React from "react";

import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Route from "./router/Route";

function App() {
  return (
    <>
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
