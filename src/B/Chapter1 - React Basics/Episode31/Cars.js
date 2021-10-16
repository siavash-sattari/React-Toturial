import React, {Component} from "react";

export default class Cars extends Component {
  state = {
    cars1: ["BMW", "BENZ", "MAZDA", "207"],
    cars2: [
      {id: 1, name: "BMW"},
      {id: 2, name: "BENZ"},
      {id: 3, name: "MAZDA"},
      {id: 4, name: "MAZDA"},
    ],
  };
  render() {
    return (
      <div>
        <h1>My Cars1 :</h1>
        {this.state.cars1.map((car) => <p key={car}>{car}</p>)}
        <hr />
        <h1>My Cars2 :</h1>
        {this.state.cars2.map((car) => <p key={car.id}>{car.name}</p>)}
      </div>
    );
  }
}
