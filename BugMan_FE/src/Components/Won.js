import React, { Component } from 'react';
import '../Styles/Won.css';

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
                <p id="level-score-message" className="score-message">Your score for this level was {this.props.levelScore}</p>
                <p id="total-score-message" className="score-message">Your total score for this game is {this.props.totalScore}</p>
                <button id="start-button" onClick={this.startGame}>Next Level</button>
            </div>
        );

    }
}

export default Won;