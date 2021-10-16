import React, {Component} from "react";

export default class ClassEvent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.sayHi}>Say Hi</button>
      </div>
    );
  }
}
