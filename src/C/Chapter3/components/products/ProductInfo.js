import React from "react";

function ProductInfo({info, remove}) {
  return (
    <div className="col-md-4 my-3">
      <div className="card bg-primary text-white">
        <div className="card-body">
          <h5>Title : {info.title}</h5>
          <h6>Price : {info.price}</h6>
          <button className="btn btn-danger btn-sm" onClick={() => remove(info.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
