import React, {Component} from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor"); 
  }

  componentDidMount() {
    console.log("Child componentDidMount"); 
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  render() {
    console.log("Child Render"); 

    return <div></div>;
  }
}
