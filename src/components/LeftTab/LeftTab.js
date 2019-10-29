import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import Container from "../Container/Container";
import Weather from "../Widgets/Weather/Weather";
import "./LeftTab.css";
import Emoji from "../Widgets/Emoji/Emoji";

class LeftTab extends Component {
  state = {
    open: false
  };
  openLeftSlider = e => {
    if (!this.state.open) {
      document
        .getElementsByClassName("LeftTab")[0]
        .classList.add("LeftTabOpen");
    } else {
      document
        .getElementsByClassName("LeftTab")[0]
        .classList.remove("LeftTabOpen");
    }
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div className="LeftTab">
        <Droppable droppableId="droppableId-1" key="123">
          {provider => (
            <div
              key="LEFTDRAWER"
              className="LeftWidgets"
              ref={provider.innerRef}
              {...provider.droppableProps}
            >
              {null}
              {this.props.left.map((leftItem, ind) => {
                return (
                  <Draggable
                    key={this.props.in[ind] + 200}
                    draggableId={"draggableId-" + this.props.in[ind]}
                    index={ind}
                  >
                    {provided => {
                      return (
                        <Container
                          key={this.props.in[ind] + 500}
                          dragProp={provided.draggableProps}
                          dragHandle={provided.dragHandleProps}
                          innerRef={provided.innerRef}
                        >
                          {leftItem == undefined ? null : leftItem[1]}
                        </Container>
                      );
                    }}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
        <div key="OPENER" onClick={this.openLeftSlider} className="LeftArrow">
          <span> ▶ </span>
        </div>
      </div>
    );
  }
}

export default LeftTab;
