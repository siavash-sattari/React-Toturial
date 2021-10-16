import React, {Component} from "react";

export default class Car extends Component {
  render() {
    return (
      <>
        <p>
          The model of car is {this.props.model} and it's color is {this.props.color}
        </p>
        <span>{this.props.children}</span>
      </>
    );
  }
}
