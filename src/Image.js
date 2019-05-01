import React, {Component} from 'react';
import './App.css';
import {Image}  from 'react-konva'
// import useImage from 'use-image'


// export const imageOfSomething = () => {
//     const [image] = useImage('https://wikiclipart.com/wp-content/uploads/2017/02/Spongebob-clip-art-5.jpg')
//     return <Image image={image} />
// }

class URLImage extends Component {
    state = {
      image: null,
      isDragging: false,
      x: 75,
      y: 55
    };

    componentDidMount() {
        this.loadImage()
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src){
            this.loadImage()
        }
    }

    componentWillUnmount() {
      this.image.removeEventListener('load', this.handleLoad)
    }
    

    loadImage() {
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad)
    }

    handleLoad = () => {
        this.setState({
            image: this.image
        })
    }
  
    render(){
      return (
        <Image
            x={this.props.x}
            y={this.props.y}
            draggable
            image={this.state.image}
            ref={node => {
                this.imageNode = node;
            }}
        />
      );
    }
  }

  export default URLImage
