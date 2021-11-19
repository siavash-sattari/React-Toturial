import React, {useState, Fragment} from "react";
import "./index.css";
import ProductList from "./components/products/ProductList";
import CustomerList from "./components/customers/CustomerList";
import Counter from "./components/Counter";
import CounterWithShouldComponentUpdate from "./components/CounterWithShouldComponentUpdate";

function App() {
  const [showProductC, setShowProductC] = useState(true);
  const [counter, setCounter] = useState(5);
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
      <hr />
      <div className="ml-5">
        <h2>Pure Component</h2>
        <label>
          Counter Value : <input onChange={(event) => setCounter(parseInt(event.target.value))} />
        </label>
        <Counter counter={counter} />
        <CounterWithShouldComponentUpdate counter={counter}/>
      </div>
    </Fragment>
  );
}

export default App;
