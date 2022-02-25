import React, { Component } from "react";
import log from "../images/loggy.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import StickeyBar from "./StickeyBar";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img style={{height:"45px",display:"flex"}} src={log} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <StickeyBar isOpen={this.state.isOpen} />
        </div>
      </nav>
    );
  }
}
