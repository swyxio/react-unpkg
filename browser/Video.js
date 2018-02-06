import React from "react";
import vjs from "video.js";

// import "video.js/dist/video-js.min.css"; // .eot file problem
// style={{ width: 600, height: 300 }}
export default class Video extends React.Component {
  render() {
    return (
      <div>
        <video
          className="video-js"
          controls
          autoPlay
          preload="auto"
          width="640px"
          data-setup="{}"
        >
          <source src="./Mt_Baker.mp4" type="video/mp4" />
          <source src="./Mt_Baker.webm" type="video/webm" />
        </video>
      </div>
    );
  }
}
