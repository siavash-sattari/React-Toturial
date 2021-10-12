import React, {Component} from "react";
import axios from "axios";
import Post from "./Post";
import SendPost from "./SendPost";

class App extends Component {
  state = {
    postData: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => this.setState({postData: res.data}));
  }

  deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => console.log(res));
  };

  render() {
    const {postData} = this.state;
    return (
      <div>
        <SendPost />
        <h1>Posts :</h1>
        {postData.map((post) => (
          <Post key={post.id} title={post.title} deletePost={() => this.deletePost(post.id)} body={post.body} id={post.id} />
        ))}
      </div>
    );
  }
}

export default App;
