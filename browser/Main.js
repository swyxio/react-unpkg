import React from "react";
import bootstrap from "bootstrap";
import { JumboTron, DropDown, Modal } from "./Components";
import Tippy from "./Tippy";
import Video from "./Video";
import Flickity from "./Flickity";
import Leaflet from "./Leaflet";
import Masonry from "./Masonry";

import "bootstrap/dist/css/bootstrap.min.css";

const section = (str, Comp) => (
  <div className="row" style={{ marginBottom: "20px", borderStyle: "solid" }}>
    <div className="col-3">
      <h3>{str}</h3>
    </div>
    {Comp}
  </div>
);

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <JumboTron />
        {section(
          "Bootstrap Components",
          <div className="col">
            <DropDown />
            <Modal />
          </div>
        )}
        {section(
          "Tippy.js",
          <div className="col">
            <Tippy />
          </div>
        )}
        {section(
          "Video.js",
          <div className="col">
            <Video />
          </div>
        )}
        {section(
          "Flickity",
          <div className="col">
            <Flickity />
          </div>
        )}
        {section(
          "Leaflet",
          <div className="col">
            <Leaflet />
          </div>
        )}
        {section(
          "Masonry",
          <div className="col" style={{ height: "800px" }}>
            <Masonry />
          </div>
        )}
      </div>
    );
  }
}
