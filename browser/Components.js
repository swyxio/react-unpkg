import React from "react";
// import Video from "./Video";
import PropTypes from "prop-types";

export const JumboTron = () => (
  <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">
      This is a sample react single page project with a bunch of the top
      frontend plugins implemented.
    </p>
    <hr className="my-4" />
    <p>See the bundle size just with this alone</p>
    <p className="lead">
      <Modal />
    </p>
  </div>
);
JumboTron.propTypes = {
  optionalBool: PropTypes.bool
};

export const DropDown = () => (
  <div>
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>

    <div className="btn-group">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Action
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>
  </div>
);

export const Modal = () => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >
      Launch demo modal
    </button>
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Even though large tracts of Europe and many old and famous States
            have fallen or may fall into the grip of the Gestapo and all the
            odious apparatus of Nazi rule, we shall not flag or fail. We shall
            go on to the end. We shall fight in France, we shall fight on the
            seas and oceans, we shall fight with growing confidence and growing
            strength in the air, we shall defend our island, whatever the cost
            may be. We shall fight on the beaches, we shall fight on the landing
            grounds, we shall fight in the fields and in the streets, we shall
            fight in the hills; we shall never surrender, and if, which I do not
            for a moment believe, this island or a large part of it were
            subjugated and starving, then our Empire beyond the seas, armed and
            guarded by the British Fleet, would carry on the struggle, until, in
            God's good time, the New World, with all its power and might, steps
            forth to the rescue and the liberation of the old.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
