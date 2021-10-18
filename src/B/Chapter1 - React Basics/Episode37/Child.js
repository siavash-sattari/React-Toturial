import React, {PureComponent} from "react";

export default class Child extends PureComponent {
  render() {
    console.log("Child is rendered");
    return <div>{this.props.text} Child</div>;
  }
}
