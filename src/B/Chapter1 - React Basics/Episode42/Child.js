import React, {Component} from "react";

export default class Child extends Component {
  
  clickHandler = () => {
    const random = Math.random();
    if (random > 0.5) {
      throw new Error("oh , an error occured !");
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
