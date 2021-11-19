import React from "react";

function ProductInfo({info}) {
  return (
    <div className="col-md-4">
      <div className="card bg-primary text-white">
        <div className="card-body">
          <h3>Title : {info.title}</h3>
          <h4>Price : {info.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
