import React, { Component } from "react";
import masonry from "masonry-layout";
import imagesloaded from "imagesloaded";
import "./Masonry.css";
// state = {};
class Mason extends Component {
  componentDidMount() {
    // var msnry = new masonry(this.grid, {
    //   itemSelector: ".grid-item",
    //   columnWidth: 200
    // });
    imagesloaded(".grid", () => {
      new masonry(this.grid, {
        itemSelector: ".grid-item",
        percentPosition: true,
        columnWidth: ".grid-sizer"
      });
    });
  }
  render() {
    return (
      <div className="grid" ref={e => (this.grid = e)}>
        <div className="grid-sizer" />
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
        </div>
        <div className="grid-item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
        </div>
      </div>
    );
  }
}

export default Mason;
