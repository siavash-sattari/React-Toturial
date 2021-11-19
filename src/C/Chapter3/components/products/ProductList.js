import React, {useState, useEffect} from "react";
import ProductInfo from "./ProductInfo";
import ProductEdit from "./ProductEdit";

// hardcode
const initialItems = [
  {id: 1, title: "Monitor", price: 300, editMode: false},
  {id: 2, title: "Mouse", price: 60, editMode: false},
  {id: 3, title: "Keyboard", price: 80, editMode: false},
];

const template = {id: null, title: "", price: null, editMode: false};

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

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (item) => {
    let temp = [...items];
    const index = items.findIndex((q) => q.id === item.id);
    temp[index] = item;
    setItems([...temp]);
  };

  const setEditMode = (id, mode = true) => {
    let temp = [...items];
    const index = items.findIndex((q) => q.id === id);
    temp[index].editMode = mode;
    setItems([...temp]);
  };

  return (
    <div className="container">
      <h2>Product List with Function Component</h2>
      <div className="row">
        {items.map((item) => (item.editMode ? <ProductEdit key={item.id} info={item} save={editItem} cancle={setEditMode} /> : <ProductInfo key={item.id} info={item} remove={removeItem} edit={setEditMode} />))}
        <ProductEdit info={template} save={addItem} cancle={setEditMode} />
      </div>
    </div>
  );
}

export default ProductList;
