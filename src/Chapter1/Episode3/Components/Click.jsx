import React, {Component} from "react";

export default class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  // handleClick() {
  //   this.setState({clickCount: this.state.clickCount + 1});
  // }

  handleClick() {
    this.setState((state) => {
      return {
        clickCount: state.clickCount + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <p>Click Count is : {this.state.clickCount}</p>
        {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    );
  }
}
