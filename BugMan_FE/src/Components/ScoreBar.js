import React, { Component } from 'react';
import '../Styles/ScoreBar.css';

class ScoreBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.pillCountDown > 0) {
            return (
                <div id="scorebar-container">
                    <div id="pill-countdown-label" className="score-text">Invulnerable Ends In: {this.props.pillCountDown}</div>
                    <div id="enemies-label" className="score-text">Enemies Remaining: {this.props.enemies}</div>
                    <div id="level-score-label" className="score-text">Level Score: {this.props.levelScore}</div>
                    <div id="total-score-label" className="score-text">Total Score: {this.props.totalScore}</div>
                </div>
            );
        }
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