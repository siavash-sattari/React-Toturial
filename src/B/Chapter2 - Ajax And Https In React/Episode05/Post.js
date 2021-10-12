import React, {Component} from "react";

export default class Post extends Component {
  render() {
    const {id, title, body} = this.props;
    return (
      <div style={{border: "1px solid #ccc", margin: "10px", padding: "0 10px"}}>
        <h2>
          {id} : {title}
        </h2>
        <p>{body}</p>
      </div>
    );
  }
}
