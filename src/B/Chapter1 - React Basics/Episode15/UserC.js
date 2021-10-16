import React, {Component} from "react";

export default class UserC extends Component {
  state = {
    name: "John",
    lastname: "Doe",
  };

  render() {
    const {name, lastname} = this.state;
    const {age, job} = this.props;
    return (
      <>
        <p>
          Hi , I'm {name} {lastname} and i'm {age} yo!
        </p>
        <p>I'm {job}</p>
      </>
    );
  }
}
