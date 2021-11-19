import React, {Component} from "react";
import CustomerInfo from "./CustomerInfo";

const initialCustomers = [
  {id: 101, fullName: "Ali Rezaei", grade: 120},
  {id: 102, fullName: "Hamid Akbari", grade: 170},
  {id: 103, fullName: "Negar Izadi", grade: 140},
];

class CustomerList extends Component {
  state = {customers: initialCustomers};

  removeCustomer = (id) => {
    this.setState({customers: this.state.customers.filter((q) => q.id != id)});
  };

  render() {
    return (
      <div className="container">
        <h2>Customer List with Class Component</h2>
        <div className="row">
          {this.state.customers.map((item) => (
            <CustomerInfo key={item.id} customer={item} remove={this.removeCustomer} />
          ))}
        </div>
      </div>
    );
  }
}

export default CustomerList;
