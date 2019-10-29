import React, { Component } from "react";
import "./RightTab.css";

class RightTab extends Component {
  state = {};
  render() {
    return (
      <div className="RightTab">
        <div className="RightArrow">
          <span> ◀ </span>
        </div>
        <div className="RightWidgets">
          <li>Arnab</li>
          <li>Avi</li>
          <li>Arjun</li>
          <li>Yasser</li>
          <li>Arnab</li>
          <li>Avi</li>
          <li>Arjun</li>
          <li>Yasser</li>
          <li>Arnab</li>
          <li>Avi</li>
        </div>
      </div>
    );
  }
}

export default RightTab;
