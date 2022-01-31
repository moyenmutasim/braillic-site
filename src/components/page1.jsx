import React, { Component } from "react";
import { page1_back } from "../styles/body.module.css";
import "../styles/body.module.css";
import { StaticImage } from "gatsby-plugin-image";

class Page_1 extends Component {
  state = {};
  render() {
    return (
      <div className={page1_back}>
        <h2>Products</h2>
        <img
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/wave.png"
        />
      </div>
    );
  }
}

export default Page_1;
