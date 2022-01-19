import React, { Component } from "react";
import { site_header, header_text } from "../styles/header.module.css";
import { Link } from "gatsby";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className={site_header}>
        <h1>
          <Link href="/" className={header_text}>
            braillic
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
