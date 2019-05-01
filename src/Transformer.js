import React, { Component } from 'react'
import {Rect, Transformer} from 'react-konva'


export class Rectangle extends Component {

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
        name={this.props.name}
        draggable    
      />
    )
  }
}


export default class TransformerComponent extends Component {

    componentDidMount() {
        this.checkNode()
    }

    componentDidUpdate() {
        this.checkNode()
    }

    checkNode() {
        const stage = this.transformer.getStage()
        const { selectedShapeName } = this.props

        const selectedNode = stage.findOne('.' + selectedShapeName)

        if (selectedNode === this.transformer.node()){
            return
        }

        if (selectedNode){
            this.transformer.attachTo(selectedNode)
        } else {
            this.transformer.detach()
        }
        this.transformer.getLayer().batchDraw()
    }

  render() {
    return (
      <Transformer
        ref={node => {
            this.transformer = node
        }}
      />
    )
  }
}

