import React, {Component} from "react";

export default class App extends Component {
  state = {
    name: "BENZ",
    speed: 250,
  };

  // changeHandler() { ========> Error
  changeHandler = () => {
    this.setState({
      name: "BMW",
    });
  };

  render() {
    return (
      <>
        <h1>My Car :</h1>
        <p>
          Car name : {this.state.name} - Car speed : {this.state.speed}
        </p>
        <button onClick={this.changeHandler}>Change</button>
      </>
    );
  }
}
