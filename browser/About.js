import React, { Component } from "react";
import axios from "axios";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

// this is a minimal exaple that uses react, react-redux, redux, axios, redux-thunk

// simple reducer
function todos(state = ["Use the force"], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

let store = createStore(todos, applyMiddleware(thunk));

class BasicReduxList extends Component {
  render() {
    return (
      <div>
        <h1>Example Axios/Redux application</h1>
        <h3>
          this is a minimal example that uses react, react-redux, redux, axios,
          redux-thunk
        </h3>
        <ul>{this.props.todos.map((val, i) => <li key={i}>{val}</li>)}</ul>
        <button onClick={this.props.fetchSWAPI}>get more</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};

// this is a thunk
const fetchSwapi = event => dispatch =>
  fetch("https://swapi.co/api/people/" + Math.floor(Math.random() * 10) + 1)
    .then(data => data.json())
    .then(data =>
      dispatch({
        type: "ADD_TODO",
        text: data.name
      })
    );
const mapDispatchToProps = dispatch => {
  return {
    fetchSWAPI: e => dispatch(fetchSwapi(e))
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(BasicReduxList);

class About extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default About;
