import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  showStyle = {
    color: "white",
    textDecoration: "none"
  };
  render() {
    return (
      <div className="Navbar">
        <p>Dell Hack2Hire</p>
        <Link to="/layout">
          <p style={this.showStyle}>Save</p>
        </Link>
      </div>
    );
  }
}

export default Navbar;
