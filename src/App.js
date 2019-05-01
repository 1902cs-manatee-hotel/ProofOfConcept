import React, {Component} from 'react';
import './App.css';
import {Stage, Layer, Text}  from 'react-konva'
import URLImage from './Image'

class App extends Component {
  state = {
    isDragging: false,
    x: 50,
    y: 50
  };

  render(){
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer>
          <URLImage src='https://konvajs.org/assets/yoda.jpg' 
            onDragStart={() => {
              this.setState({
                isDragging: true
              })
            }}
            onDragEnd={e => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y()
              })
            }}
          />
          <Text
            text='Draggable Text!'
            x={this.state.x}
            y={this.state.y}
            draggable
            onDragStart={() => {
              this.setState({
                isDragging: true
              })
            }}
            onDragEnd={e => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y()
              })
            }}
          />
        </Layer>
      </Stage>
    );
  }
}

export default App;
