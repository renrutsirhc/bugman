import React, { Component } from 'react';
import '../Styles/ScoreBar.css';

class ScoreBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="scorebar-container">
                <div id="enemies-label" className="score-text">Enemies Remaining: {this.props.enemies}</div>
                <div id="level-score-label" className="score-text">Level Score: {this.props.levelScore}</div>
                <div id="total-score-label" className="score-text">Total Score: {this.props.totalScore}</div>
            </div>
        );
    }
}

export default ScoreBar;