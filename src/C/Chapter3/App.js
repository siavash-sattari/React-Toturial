import React, {useState, Fragment} from "react";
import "./index.css";
import ProductList from "./components/products/ProductList";
import CustomerList from "./components/customers/CustomerList";

function App() {
  const [showProductC, setShowProductC] = useState(true);
  return (
    <Fragment>
      <h1 className="text-center">Session 03</h1>
      <hr />
      <div className="text-center my-4">
        <button className="btn btn-outline-primary mr-4" onClick={() => setShowProductC(true)}>
          show product list
        </button>
        <button className="btn btn-outline-danger ml-4" onClick={() => setShowProductC(false)}>
          show customer list
        </button>
      </div>
      {showProductC ? <ProductList /> : <CustomerList />}
    </Fragment>
  );
}

export default App;
