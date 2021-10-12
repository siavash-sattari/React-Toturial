import React, {Component} from "react";

class App extends Component {
  state = {
    postData: [],
  };

  // GET Single POST

  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // GET All POSTs

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({postData: json}));
  }

  // Send POST

  sendPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Delete POST

  deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // render

  render() {
    return (
      <div>
        <button onClick={this.getPost}>Get Post</button>
        <button onClick={this.sendPost}>Send Post</button>
        <button onClick={this.deletePost}>Delete Post</button>
        <h1>Posts :</h1>
        {this.state.postData.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    );
  }
}

export default App;
