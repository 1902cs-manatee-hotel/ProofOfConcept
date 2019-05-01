import React, { Component } from "react";
import "./App.css";
import { Stage, Layer, Text } from "react-konva";
import URLImage from "./Image";
import TransformerComponent, { Rectangle } from "./Transformer";
import Form, { handleSubmit } from "./Form";

class App extends Component {
  state = {
    isDragging: false,
    x: 50,
    y: 50,
    rectangles: [
      {
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: "red",
        name: "rectange1"
      }
    ],
    selectedShapeName: ""
  };

  handleStageMouseDown = e => {
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ""
      });
      return;
    }
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";

    if (clickedOnTransformer) {
      return;
    }

    const name = e.target.name();
    const rect = this.state.rectangles.find(r => r.name === name);
    if (rect) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ""
      });
    }
  };

  render() {
    const text = "Hello";
    return (
      <div>
        <Form />
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={this.handleStageMouseDown}
        >
          <Layer>
            {this.state.rectangles.map((rect, i) => (
              <Rectangle key={i} {...rect} />
            ))}
            <URLImage
              src="https://konvajs.org/assets/yoda.jpg"
              onDragStart={() => {
                this.setState({
                  isDragging: true
                });
              }}
              onDragEnd={e => {
                this.setState({
                  isDragging: false,
                  x: e.target.x(),
                  y: e.target.y()
                });
              }}
            />
            <TransformerComponent
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
