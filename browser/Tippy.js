import React from "react";
import tippy from "tippy.js";

const styleObj = {
  background: "linear-gradient(135deg, #73a5ff, #5477f5)",
  color: "white"
};

export default class Tippy extends React.Component {
  componentDidMount() {
    tippy(".btn");
  }
  render() {
    return (
      <div>
        <button className="btn" title="I'm a tooltip!" style={styleObj}>
          Hover over me!
        </button>
        <button
          className="btn"
          title="<strong>I'm a bold tooltip!</strong>"
          style={styleObj}
        >
          What about me!
        </button>
      </div>
    );
  }
}
