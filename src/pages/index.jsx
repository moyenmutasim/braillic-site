import React, { Component } from "react";
import Header from "../components/header";
import "../styles/layout.css";
import { body_grid_container } from "../styles/layout.css";
import Body from "../components/body";

class indexPage extends Component {
  state = {};
  render() {
    return (
      <div className={body_grid_container}>
        <Header />
        <Body />
      </div>
    );
  }
}

export default indexPage;
