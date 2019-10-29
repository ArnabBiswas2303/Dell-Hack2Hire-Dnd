import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <div
        className="Container"
        ref={this.props.innerRef}
        {...this.props.dragProp}
        {...this.props.dragHandle}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
