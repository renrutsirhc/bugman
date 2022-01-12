import React, { Component } from 'react';
import ScoreBar from './ScoreBar.js';
import Canvas from './Canvas.js';
import Won from './Won.js';
import Lost from './Lost.js';
import Start from './Start.js';
import '../Styles/Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            currentLevel: null,
            hasWon: false,
            hasLost: false,
            hasStarted: false,
            levelNumber: 1,
            enemies: 0,
            levelScore: 0,
            totalScore: 0,
            confirmedTotalScore:0,
        }



        this.handleLost = this.handleLost.bind(this);
        this.handleWon = this.handleWon.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleSameLevel = this.handleSameLevel.bind(this);
        this.handleNextLevel = this.handleNextLevel.bind(this);
        this.handleUpdateScore = this.handleUpdateScore.bind(this);
        this.handleUpdateEnemies = this.handleUpdateEnemies.bind(this);
    }

    handleLost() {
        this.setState({
            hasLost: true
        });
    }

    handleWon() {
        this.setState((state) => ({
            hasWon: true,
            confirmedTotalScore: state.totalScore,
        }));
    }

    handleStart() {
        this.setState({
            hasStarted: true,
            hasWon: false,
            hasLost: false,
        })
    }

    handleSameLevel() {
        this.setState((state) => ({
            totalScore: state.totalScore - state.levelScore,
            levelScore: 0,
            enemies: 0,
        }));
    }

    handleNextLevel() {
        this.setState((state) => ({
            levelNumber: state.levelNumber + 1,
            levelScore: 0,
            enemies: 0,
        }));
    }

    handleUpdateScore(increment) {
        this.setState((state) => ({
            levelScore: state.levelScore + increment,
            totalScore: state.totalScore + increment,
        }));
    }

    handleUpdateEnemies(increment) {
        this.setState((state) => ({
            enemies: state.enemies + increment,
        }));
    }


    render() {
        if (this.state.hasWon) {
            //has won so return the won screen
            return (
                <Won handleStart={this.handleStart} handleNextLevel={this.handleNextLevel} levelScore={this.state.levelScore} totalScore={this.state.totalScore} />
            );
        }
        if (this.state.hasLost) {
            return (
                <Lost handleStart={this.handleStart} handleSameLevel={this.handleSameLevel} totalScore={this.state.confirmedTotalScore}/>
            );
        }
        if (this.state.hasStarted == false) {
            //game not started yet so show welcome screen
            return (
                <Start handleStart={this.handleStart} />
            );
        }
        return (
            <div id="game-container">
                <ScoreBar enemies={this.state.enemies} levelScore={this.state.levelScore} totalScore={this.state.totalScore}/>
                <Canvas handleLost={this.handleLost} handleWon={this.handleWon} handleUpdateScore={this.handleUpdateScore} handleUpdateEnemies={this.handleUpdateEnemies} levelNumber={this.state.levelNumber}/>
            </div>
        );

    }

}
export default Game;