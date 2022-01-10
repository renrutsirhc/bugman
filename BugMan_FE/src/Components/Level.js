import React, { Component } from 'react';
import Player from '../GameObjects/Player.js'


class Level extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameObjects: [],
            canvasRef: React.createRef(),
            canvas: null,
            ctx: null,
        }
    }

    componentDidMount() {
        this.state.canvas = this.state.canvasRef.current;
        this.state.ctx = this.state.canvas.getContext('2d');
        let player = new Player(this.state.ctx);
        player.draw();

    }

    render() {
        return (
            <div id="canvas-container">
                    <canvas
                        id="canvas"
                        ref={this.state.canvasRef}
                        width={500}
                        height={500}
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
export default Level;