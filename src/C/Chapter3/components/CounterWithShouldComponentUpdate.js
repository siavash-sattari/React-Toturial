import React, {Component} from "react";

class CounterWithShouldComponentUpdate extends Component {
  componentDidMount() {
    console.log("CounterWithShouldComponentUpdate componentDidMount");
  }

  componentDidUpdate() {
    console.log("CounterWithShouldComponentUpdate componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.counter === this.props.counter) {
      return false;
    }
    return true;
  }

  render() {
    return <div>CounterWithShouldComponentUpdate : {this.props.counter}</div>;
  }
}

export default CounterWithShouldComponentUpdate;
