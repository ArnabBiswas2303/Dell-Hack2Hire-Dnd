import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import "./LayoutEditor.css";
import { Draggable } from "react-beautiful-dnd";
import Container from "../Container/Container";
import "../Container/Container.css";

class LayoutEditor extends Component {
  state = {
    id: "droppableId-2"
  };
  render() {
    return (
      <Droppable droppableId={this.state.id} key="124" direction="horizontal">
        {provided2 => {
          return (
            <div
              ref={provided2.innerRef}
              {...provided2.droppableProps}
              className="LayoutEditor"
            >
              {null}
              {this.props.middle.map((middleItem, ind) => {
                return (
                  <Draggable
                    key={this.props.in[ind] + 300}
                    draggableId={"draggable2Id-" + this.props.in[ind]}
                    index={ind}
                  >
                    {provided => {
                      return (
                        <Container
                          key={this.props.in[ind] + 600}
                          dragProp={provided.draggableProps}
                          dragHandle={provided.dragHandleProps}
                          innerRef={provided.innerRef}
                        >
                          {middleItem ? middleItem[1] : <h2>No Item</h2>}
                        </Container>
                      );
                    }}
                  </Draggable>
                );
              })}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default LayoutEditor;
