import React, { Component } from 'react';
import Level from '../GameObjects/Level.js'
import '../Styles/Canvas.css';


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
            handleUpdateScore: props.handleUpdateScore,
            handleUpdateEnemies: props.handleUpdateEnemies,
            levelNumber: props.levelNumber,
            isLoaded: false,
            error: null,


        }

        this.canvas = null;
        this.ctx = null;
        this.level = null;
    }

    handleUpdateScore(increment) {
        this.state.handleUpdateScore(increment);
    }

    handleUpdateEnemies(increment) {
        this.state.handleUpdateEnemies(increment);
    }

    componentDidMount() {
        //here we need to fetch the level from the database.
        let url = "https://localhost:5001/level?level=" + this.state.levelNumber;
        fetch(url)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                console.log("LevelNumber: " + data.levelNumber);
                console.log("Width: " + data.width);
                console.log("Height: " + data.height);
                console.log("Data: " + data.data);

                this.setState({
                    isLoaded: true,
                });

                this.canvas = this.state.canvasRef.current;
                this.ctx = this.canvas.getContext('2d');

                //and pass the level data into the level object in the constructor - will need to modify the level object to accept this
                this.level = new Level(this.ctx, data.width, data.height, data.data, this);
                this.setState({
                    width: this.level.width * this.level.squareSize,
                    height: this.level.height * this.level.squareSize,
                });



                //16ms interval roughly equivalent to 60fps
                this.timer = setInterval(() => this.update(), 16);

            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.error('There was an error!', error);
            });




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
        if (this.state.error != null) {
            return (
                <div id="error-container" >
                    <h1 id="error-message">There was an error loading the level from the server.</h1>
                    <p>{this.state.error.message}</p>
                    <p>{this.state.error.stack}</p>
                </div >
            );
        }

        if (this.state.isLoaded == false) {
            return (
                //could maybe create a loading component...
                <div id="loading-container" >
                    <h1 id="loading-message">Loading Level.</h1>
                </div >
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
                >
                </canvas>
            </div>
        );
    }
}

export default Canvas;