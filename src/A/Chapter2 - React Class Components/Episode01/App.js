import React, {Component} from "react";
import "./style.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleIncrease() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    console.log("render");
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrease}>Increase Counter</button>
      </>
    );
  }
}
