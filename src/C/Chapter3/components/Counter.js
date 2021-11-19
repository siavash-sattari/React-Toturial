import React, {PureComponent} from "react";

class Counter extends PureComponent {
  componentDidMount() {
    console.log("Counter componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter componentDidUpdate");
  }

  render() {
    return <div>Counter : {this.props.counter}</div>;
  }
}

export default Counter;
