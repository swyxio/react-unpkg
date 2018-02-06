import React, { Component } from "react";
import Flickity from "flickity";

import "flickity/dist/flickity.min.css";
import "./Flickity.css";
// state = {};
class Flick extends Component {
  componentDidMount() {
    this.flkty = new Flickity(".main-carousel", {
      //options
      cellAlign: "left",
      contain: true,
      autoPlay: 1500
    });
  }
  render() {
    return (
      <div className="main-carousel">
        <div className="carousel-cell">
          <img src="https://source.unsplash.com/random/600x400" />
        </div>
        <div className="carousel-cell">
          <img src="https://source.unsplash.com/random/600x399" />
        </div>
        <div className="carousel-cell">
          <img src="https://source.unsplash.com/random/600x398" />
        </div>
        <div className="carousel-cell">
          <img src="https://source.unsplash.com/random/600x397" />
        </div>
      </div>
    );
  }
}

export default Flick;
