import React, {Component} from "react";

import UserC from "./UserC";
import UserF from "./UserF";

export default class App extends Component {
  render() {
    return (
      <>
        <UserC age="28" job="programmer" />
        <UserF name="Jack" age="32" />
      </>
    );
  }
}
