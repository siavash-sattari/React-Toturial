import React, {Component} from "react";

export default class Post extends Component {
  render() {
    const {id, title, body, deletePost} = this.props;
    return (
      <div style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
        <h2>
          {id} : {title}
        </h2>
        <p>{body}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    );
  }
}
