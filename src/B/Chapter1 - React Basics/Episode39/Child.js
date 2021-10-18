import React, {Component} from "react";

export default class Child extends Component {
  input = React.createRef();

  showRef = () => {
    console.log(this.input.current.value);
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <button onClick={this.showRef}>Show</button>
        <input type="text" ref={this.input} />
      </div>
    );
  }
}
