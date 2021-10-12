import React, {Component} from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

export default class Conditional extends Component {
  state = {
    isLoggedIn: true,
  };

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    let button = null;
    if (this.state.isLoggedIn) {
      button = <Logout handleClick={() => this.handleLogout()} />;
    } else {
      button = <Login handleClick={() => this.handleLogin()} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
        {this.state.isLoggedIn && <p>User is logged in</p>}
      </div>
    );
  }
}
