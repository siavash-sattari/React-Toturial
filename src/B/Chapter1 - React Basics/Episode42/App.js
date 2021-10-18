import React, {Component} from "react";
import Child from "./Child";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      </div>
    );
  }
}
