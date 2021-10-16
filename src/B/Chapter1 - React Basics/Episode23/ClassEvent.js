import React, {Component} from "react";

export default class ClassEvent extends Component {
  state = {
    paragraph: "text 1",
  };

  //   Method 1 :
  //   clickHandler = this.clickHandler.bind(this);
  //   clickHandler() {
  //     this.setState({paragraph: "text 2"});
  //   }

  //   Method 2 :
  clickHandler = () => {
    this.setState({paragraph: "text 2"});
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Event</button>
        <p>{this.state.paragraph}</p>
      </div>
    );
  }
}
