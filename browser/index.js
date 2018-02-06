import React from "react";
import ReactDOM from "react-dom";
import Plain from "./Plain";
import ReduxApp from "./About";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">ReduxApp</Link>
        </li>
        <li>
          <Link to="/about">Plain</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/about" component={Plain} />
        <Route component={ReduxApp} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById("myApp"));
