import React, {Component} from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor"); // 3
  }

  componentDidMount() {
    console.log("Child componentDidMount"); // 5
  }

  render() {
    console.log("Child Render"); // 4

    return <div></div>;
  }
}
