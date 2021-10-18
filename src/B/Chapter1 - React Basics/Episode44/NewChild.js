import React, {Component} from "react";

export default class NewChild extends Component {
  render() {
    return (
      <div>
        <h1>Total products : {this.props.number}</h1>
      </div>
    );
  }
}
