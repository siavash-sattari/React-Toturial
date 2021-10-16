import React, {Component} from "react";

export default class App extends Component {
  state = {
    number: 0,
  };

  // upOne = () => {
  //   this.setState({
  //     number: this.state.number + 1,
  //   } , () => console.log(`New number : ${this.state.number}`));
  // };

  upOne = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  upThree = () => {
    this.upOne();
    this.upOne();
    this.upOne();
  };

  render() {
    return (
      <>
        <h1>Number : {this.state.number}</h1>
        <button onClick={this.upThree}>UP 1</button>
      </>
    );
  }
}
