import React, { Component } from 'react';
import Level from '../GameObjects/Level.js'
import Won from './Won.js'


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameObjects: [],
            canvasRef: React.createRef(),
            width: 0,
            height: 0,
            hasWon: false,
        }

        this.canvas = null;
        this.ctx = null;
        this.level = null;
    }

    componentDidMount() {
        this.canvas = this.state.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.level = new Level(this.ctx);
        this.setState({
            width: this.level.width * this.level.squareSize,
        });

        this.setState({
            height: this.level.height * this.level.squareSize,
        });

        //16ms interval roughly equivalent to 60fps
        this.timer = setInterval(() => this.update(), 16);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    update() {
        console.log("Tick");
        //erase the canvas
        this.ctx.clearRect(0, 0, this.state.width, this.state.height);
        //save state of ctx
        this.ctx.save();
        //update the level object
        this.level.update();
        //draw the level object
        this.level.draw();
        //restore the state of the canvas
        this.ctx.restore();

        if (this.level.hasWon()) {
            this.setState({
                hasWon: true
            });
        }
    }

    render() {
        if (this.state.hasWon) {
            //has won so return the won screen
            return (
                <div id="won-container">
                    <Won />
                </div>
            );
        }
        return (
            //hasn't won yet so return the canvas
            <div id="canvas-container">
                <canvas
                    id="canvas"
                    ref={this.state.canvasRef}
                    width={this.state.width}
                    height={this.state.height}
                    style={{
                        border: '2px solid #000',
                        marginTop: 10,
                    }}
                >
                </canvas>
            </div>
        );
    }
}

export default Canvas;