import React, {Component} from "react";
import "./App.css";
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="job">React Developer</h1>
        <h1 className={styles.job}>React Developer</h1>
      </>
    );
  }
}
