import React, {Component} from "react";

export default class Login extends Component {
  state = {
    isLoggedIn: true,
  };

  render() {
    // Method 1 =============================

    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome</h1>;
    // } else {
    //   return <button>Login</button>;
    // }

    // Method 2 =============================

    // let text;
    // if (this.state.isLoggedIn) {
    //   text = "Welcome";
    // } else {
    //   text = "Login";
    // }
    // return <h1>{text}</h1>;

    // Method 3 =============================

    return (
      <div>
        {/* {this.state.isLoggedIn ? <h1>Welcome</h1> : <button>Login</button>} */}
        {this.state.isLoggedIn && <h1>Welcome</h1>}
      </div>
    );
  }
}
