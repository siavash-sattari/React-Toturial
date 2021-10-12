import React, {Component} from "react";
import axios from "axios";
import Post from "./Post";

class App extends Component {
  state = {
    postData: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => this.setState({postData: res.data}));
  }

  render() {
    const {postData} = this.state;
    return (
      <div>
        <h1>Posts :</h1>
        {postData.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} id={post.id} />
        ))}
      </div>
    );
  }
}
export default App;
