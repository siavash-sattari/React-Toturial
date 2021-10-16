import React, {Component} from "react";
import Car from "./Car";

export default class App extends Component {
  render() {
    return (
      <>
        <h1>My Cars :</h1>
        <Car model="BMW" color="red" />
        <Car model="BENZ" color="blue" />
        <Car model="AUDI" color="black" />
      </>
    );
  }
}
