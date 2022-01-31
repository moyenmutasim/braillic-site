import React, { Component } from "react";
import Header from "../components/header";
import "../styles/layout.module.css";
import { body_grid_container } from "../styles/layout.module.css";
import Hero from "../components/Hero";
import Page_1 from "../components/page1";

class indexPage extends Component {
  state = {};
  render() {
    return (
      <div className={body_grid_container}>
        <Header />
        <Hero />
        <Page_1 />
      </div>
    );
  }
}

export default indexPage;
