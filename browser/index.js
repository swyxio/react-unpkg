import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById("myApp"));
