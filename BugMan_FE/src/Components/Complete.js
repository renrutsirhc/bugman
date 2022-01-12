import React, { Component } from 'react';
import '../Styles/Complete.css';

class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleStart: props.handleStart,
            handleReset: props.handleReset,
        }
        this.startGame = this.startGame.bind(this);
    }

    startGame() {
        this.state.handleReset();
        this.state.handleStart();
    }

    render() {
        return (
            <div id="complete-container">
                <h1 id="complete-message">Congrats! You have completed Bug Man! Play again from the beginning?</h1>
                <p id="level-score-message" className="score-message">Your score for this level was {this.props.levelScore}</p>
                <p id="total-score-message" className="score-message">Your total score for this game is {this.props.totalScore}</p>
                <button id="start-button" onClick={this.startGame}>New Game</button>
            </div>
        );

    }
}

export default Complete;