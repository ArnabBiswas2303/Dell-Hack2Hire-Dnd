import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LayoutEditor from "./components/LayoutEditor/LayoutEditor";
import LeftTab from "./components/LeftTab/LeftTab";
import RightTab from "./components/RightTab/RightTab";
import { DragDropContext } from "react-beautiful-dnd";
import Weather from "./components/Widgets/Weather/Weather";
import Emoji from "./components/Widgets/Emoji/Emoji";
import { stat } from "fs";

class App extends Component {
  state = {
    left: [
      ["User Widget", <Weather></Weather>],
      ["Emoji Widget", <Emoji></Emoji>],
      ["User Widget", <Weather></Weather>],
      ["Emoji Widget", <Emoji></Emoji>],
      ["User Widget", <Weather></Weather>],
      ["Emoji Widget", <Emoji></Emoji>],
      ["User Widget", <Weather></Weather>],
      ["Emoji Widget", <Emoji></Emoji>]
    ],
    in: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    middle: []
  };

  saveToLocal = state => {
    try {
      const serialState = JSON.stringify({ local: state });
      localStorage.setItem("state", serialState);
    } catch (e) {
      console.log(e);
    }
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.draggableId === source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }
    const pickUp = source.droppableId;
    const dropIn = destination.droppableId;
    if (pickUp === dropIn) {
      if (pickUp === "droppableId-1") {
        const newLeft = [...this.state.left];
        newLeft.splice(source.index, 1);
        newLeft.splice(destination.index, 0, this.state.left[source.index]);
        this.setState({
          left: newLeft,
          ...this.state.in
        });
        return;
      } else {
        const newMiddle = [...this.state.middle];
        newMiddle.splice(source.index, 1);
        newMiddle.splice(destination.index, 0, this.state.middle[source.index]);
        this.setState({
          middle: newMiddle,
          ...this.state.in
        });
        return;
      }
    } else {
      const newLeft = [...this.state.left];
      const newMiddle = [...this.state.middle];
      newLeft.splice(source.index, 1);
      newMiddle.splice(destination.index, 0, this.state.left[source.index]);
      this.setState({
        left: newLeft,
        middle: newMiddle,
        ...this.state.in
      });
    }
  };
  widgets = [];
  render() {
    this.widgets = this.state.middle.map(el => el[0]);
    this.saveToLocal(this.widgets);
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        <div className="App">
          <Navbar></Navbar>
          <LeftTab left={this.state.left} in={this.state.in}></LeftTab>
          <LayoutEditor
            middle={this.state.middle}
            in={this.state.in}
          ></LayoutEditor>
          <RightTab></RightTab>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
