import React, {Component} from "react";
import Time from "./Time";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
    };

    this.toggleShowTime = this.toggleShowTime.bind(this);
  }

  toggleShowTime() {
    this.setState((state) => {
      return {
        showTime: !state.showTime,
      };
    });
  }

  render() {
    const showTime = this.state.showTime;
    return (
      <div>
        {showTime && <Time />}
        <button onClick={this.toggleShowTime}>{showTime ? "Hide time" : "Show time"}</button>
      </div>
    );
  }
}
