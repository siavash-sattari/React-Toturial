import React, {Component} from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((res) => console.log(res));
      .then((response) => console.log(response.data));
  }

  render() {
    return (
      <div>
        <h1>See Console</h1>
      </div>
    );
  }
}

export default App;
