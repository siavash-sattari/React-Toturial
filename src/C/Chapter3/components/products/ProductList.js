import React, {useState, useEffect} from "react";
import ProductInfo from "./ProductInfo";

// hardcode
const initialItems = [
  {id: 1, title: "Monitor", price: 300},
  {id: 2, title: "Mouse", price: 60},
  {id: 3, title: "Keyboard", price: 80},
];

function ProductList() {
  const [items, setItems] = useState(initialItems);

  // Component Lifecycle ================================

  useEffect(() => {
    // componentDidMount =====> always running .
    console.log("ProductList componentDidMount");

    // componentDidUpdate =====> if dependency array(items) will change
    console.log("ProductList componentDidUpdate");

    // componentWillUnmount
    return () => {
      console.log("ProductList componentWillUnmount");
    };
  }, [items]);

  // ====================================================

  const removeItem = (id) => {
    if (window.confirm("are yot sure remove item?")) {
      setItems([...items.filter((q) => q.id !== id)]);
    }
  };

  return (
    <div className="container">
      <h2>Product List with Function Component</h2>
      <div className="row">
        {items.map((item) => (
          <ProductInfo key={item.id} info={item} remove={removeItem} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
