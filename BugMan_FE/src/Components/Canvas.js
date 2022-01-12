import React, { Component } from 'react';
import Level from '../GameObjects/Level.js'
import Won from './Won.js'
import Lost from './Lost.js'


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameObjects: [],
            canvasRef: React.createRef(),
            width: 0,
            height: 0,
            handleWon: props.handleWon,
            handleLost: props.handleLost,
            levelNumber: props.levelNumber,
        }

        this.canvas = null;
        this.ctx = null;
        this.level = null;
    }

    componentDidMount() {
        //here we need to fetch the level from the database.



        this.canvas = this.state.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');

        //and pass the level into the level object in the constructor - will need to modify the level object to accept this
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

        if (this.level.hasWon) {
            this.state.handleWon();
        }

        if (this.level.hasLost) {
            this.state.handleLost();
        }
    }

    render() {


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