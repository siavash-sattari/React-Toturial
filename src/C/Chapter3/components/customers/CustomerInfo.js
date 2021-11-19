import React, {Component} from "react";

class CustomerInfo extends Component {
  render() {
    const {fullName, grade} = this.props.customer;
    return (
      <div className="col-md-4 my-3">
        <div className="card bg-danger text-white">
          <div className="card-body m">
            <h5>Full Name : {fullName}</h5>
            <h6>Grade : {grade}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
