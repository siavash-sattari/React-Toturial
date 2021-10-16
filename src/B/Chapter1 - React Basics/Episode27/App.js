import React, {Component} from "react";
import ClassEvent from "./ClassEvent";

export default class App extends Component {
  state = {
    text: "Hi John",
  };

  sayHi = () => {
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <ClassEvent sayHi={this.sayHi} />
      </div>
    );
  }
}
