import React, { Component } from "react";
import { Text, Stage, Layer } from "react-konva";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      newText: "",
      isDragging: false,
      x: 50,
      y: 50
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
    newText: e.target.value,
      userInput: ""
    });
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userInput">User Input: </label>
          <input
            type="text"
            name="userInput"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Stage width={200} height={200}>
          <Layer>
            <Text
              text={this.state.userInput}
              x={this.state.x}
              y={this.state.y}
              draggable
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
          </Layer>
        </Stage>
      </div>
    );
  }
}
