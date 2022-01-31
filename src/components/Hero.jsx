import React, { Component } from "react";
import {
  image_back,
  cover,
  title,
  logo,
  sub,
  image_wave,
} from "../styles/body.module.css";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className={image_back}>
        <div className={cover}>
          <div className={logo}></div>
          <h1 className={title}>braillic</h1>
          <p className={sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={image_wave}>
            {/* <img src="../images/wave.png" className={image_wave} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
