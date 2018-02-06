import React, { Component } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// state = {}
class Leaf extends Component {
  componentDidMount() {
    var mymap = L.map("mapid").setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoic3d5eCIsImEiOiJjamRiMzUwYnUwNGlyMndwbHIzZ2drazd5In0.IUqY3LysTYsAIUYdxCvosQ"
      }
    ).addTo(mymap);
  }
  render() {
    return <div id="mapid" style={{ height: "400px" }} />;
  }
}

export default Leaf;
