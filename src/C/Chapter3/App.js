import React from "react";
import "./index.css";
import ProductList from "./components/products/ProductList";
import CustomerList from "./components/customers/CustomerList";

function App() {
  return (
    <div>
      <h1 className="text-center">Session 03</h1>
      <hr />
      <ProductList />
      <hr />
      <CustomerList />
    </div>
  );
}

export default App;
