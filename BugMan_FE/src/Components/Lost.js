import React, { Component } from 'react';
import '../Styles/Lost.css';

class Lost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleStart: props.handleStart,
            handleSameLevel: props.handleSameLevel,
        }
        this.startGame = this.startGame.bind(this);
    }

    startGame() {
        this.state.handleSameLevel();
        this.state.handleStart();
    }

    render() {
        return (
            <div id="lost-container">
                <h1 id="lost-message">Boo - you lost! Play again?</h1>
                <p id="level-score-message" className="score-message">Your score for this level was 0</p>
                <p id="total-score-message" className="score-message">Your total score for this game is {this.props.totalScore}</p>
                <button id="start-button" onClick={this.startGame}>Play Level Again</button>
            </div>
        );

    }
}

export default Lost;