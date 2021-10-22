import React from "react";
import {Link, Route} from "react-router-dom";
import Programmers from "./Programmers";
import Drivers from "./Drivers";

export default function AboutUs(props) {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="/about/programmers">Programmers</Link>
        </li>
        <li>
          <Link to="/about/drivers">Drivers</Link>
        </li>
      </ul>
      <div>
        <Route path="/about/programmers" component={Programmers} />
        <Route path="/about/drivers" component={Drivers} />
      </div>
    </div>
  );
}
