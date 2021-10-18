import React, {Component} from "react";

export default class Child extends Component {
  state = {
    name: "John Doe",
  };
  render() {
    return (
      <div>
        <h3>
          Name : {this.state.name} - Age : {this.props.age}
        </h3>
      </div>
    );
  }
}
