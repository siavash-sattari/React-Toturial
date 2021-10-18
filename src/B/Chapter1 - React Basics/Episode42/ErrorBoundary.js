import React, {Component} from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
    errorMessage: "",
  };

  componentDidCatch(error) {
    this.setState({
      error: true,
      errorMessage: error,
    });
  }

  render() {
    const {error, errorMessage} = this.state;

    return <div>{error ? <p>{errorMessage}</p> : this.props.children}</div>;
  }
}
