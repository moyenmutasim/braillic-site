import React, { Component } from "react";
import { image_back, cover, title, logo, sub } from "../styles/body.module.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className={image_back}>
        <div className={cover}>
          {/* <img src="../images/logo_color.png" alt="logo" className={logo} /> */}
          <div className={logo}></div>
          <h1 className={title}>braillic</h1>
          <p className={sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    );
  }
}

export default Body;
