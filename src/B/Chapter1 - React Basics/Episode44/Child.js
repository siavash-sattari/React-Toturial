import React, {Component} from "react";

export default class Child extends Component {
  render() {
    const {clickHandler, number} = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Plus one</button>
        <h3>Number of products : {number}</h3>
      </div>
    );
  }
}
