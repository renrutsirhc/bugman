import React, { Component } from 'react';
import Level from '../GameObjects/Level.js'


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameObjects: [],
            canvasRef: React.createRef(),
            canvas: null,
            ctx: null,
            level: null,
            width: 608,
            height: 704,
        }

        this.canvas = null;
        this.ctx = null;
        this.level = null;
    }

    componentDidMount() {
        this.canvas = this.state.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.level = new Level(this.ctx);

        //16ms interval roughly equivalent to 60fps
        setInterval(this.update, 16, this.ctx, this.level, this.state.width, this.state.height);

    }


    update(ctx, level, width, height) {
        console.log("Tick");
        //erase the canvas
        ctx.clearRect(0, 0, width, height);
        //save state of ctx
        ctx.save();
        //update the level object
        level.update();
        //draw the level object
        level.draw();
        //restore the state of the canvas
        ctx.restore();

    }

    render() {
        return (
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