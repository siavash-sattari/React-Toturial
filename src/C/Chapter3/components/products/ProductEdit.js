import React, {useState} from "react";

function ProductEdit({info, cancle, save}) {
  const [title, setTitle] = useState(info.title);
  const [price, setPrice] = useState(info.price);

  const saveItem = () => {
    let item = {};
    if (info.editMode) {
      // Update Data
      item = {id: info.id, title, price, editMode: false};
    } else {
      // Insert Data
      item = {id: Math.random() * 200, title, price, editMode: false};
      setTitle("");
      setPrice("");
    }
    save(item);
  };

  return (
    <div className="col-md-4 my-3">
      <div className="card bg-info text-white">
        <div className="card-header">{info.editMode ? "Edit Item" : "Add New Item"}</div>
        <div className="card-body">
          <div>
            Title : <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            Price : <input name="price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
          </div>
          <button className="btn btn-success btn-sm" onClick={saveItem}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => cancle(info.id, false)}>
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
