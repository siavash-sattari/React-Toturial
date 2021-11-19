import React, {useState} from "react";
import ProductInfo from "./ProductInfo";

// hardcode

const initialItems = [
  {id: 1, title: "Monitor", price: 300},
  {id: 2, title: "Mouse", price: 60},
  {id: 3, title: "Keyboard", price: 80},
];

function ProductList() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="container">
      <h2>Product List with Function Component</h2>
      <div className="row">
        {items.map((item) => (
          <ProductInfo key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
