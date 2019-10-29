import React, { Component } from "react";
import Weather from "./Widgets/Weather/Weather";
import Emoji from "./Widgets/Emoji/Emoji";
import Container from "./Container/Container";
import "./ShowLayout.css";
class ShowLayout extends Component {
  state = {
    items: [],
    widgets: {
      "User Widget": [<Weather></Weather>],
      "Emoji Widget": [<Emoji></Emoji>]
    }
  };
  copy = [];
  loadLocal = () => {
    try {
      const serialState = localStorage.getItem("state");
      if (serialState === null) return undefined;
      return JSON.parse(serialState);
    } catch (e) {
      console.log(e);
    }
  };
  componentWillMount() {
    this.setState({ items: this.loadLocal().local });
  }
  render() {
    console.log(this.state.items);
    return (
      <div className="ShowLayout">
        <h1>Final Layout</h1>
        <div className="FinalLayout">
          {this.state.items.map(el => {
            return <Container>{this.state.widgets[el]}</Container>;
          })}
        </div>
      </div>
    );
  }
}

export default ShowLayout;
