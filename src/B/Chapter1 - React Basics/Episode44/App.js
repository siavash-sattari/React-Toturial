import React, {Component} from "react";
import Child from "./Child";
import NewChild from "./NewChild";

export default class App extends Component {
  state={
    number:0
  }

  clickHandler = () =>{
    this.setState((prevState) => ({number : prevState.number +1}))
  }

  render() {
    return (
      <div>
          <Child number={this.state.number} clickHandler={this.clickHandler}/>
          <NewChild number={this.state.number}/>
      </div>
    );
  }
}
