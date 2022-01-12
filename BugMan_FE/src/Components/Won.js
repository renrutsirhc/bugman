import React, { Component } from 'react';

class Won extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleStart: props.handleStart,
            handleNextLevel: props.handleNextLevel,
        }
        this.startGame = this.startGame.bind(this);
    }

    startGame() {
        this.state.handleNextLevel();
        this.state.handleStart();
    }

    render() {
        return (
            <div id="won-container">
                <h1 id="won-message">Congrats! You won this level!</h1>
                <button id="start-button" onClick={this.startGame}>Next Level</button>
            </div>
        );

    }
}

export default Won;