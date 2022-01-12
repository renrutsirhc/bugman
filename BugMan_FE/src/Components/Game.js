import React, { Component } from 'react';
import Canvas from './Canvas.js';
import Won from './Won.js';
import Lost from './Lost.js';
import Start from './Start.js';

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
        }

        this.handleLost = this.handleLost.bind(this);
        this.handleWon = this.handleWon.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleNextLevel = this.handleNextLevel.bind(this);
    }

    handleLost() {
        this.setState({
            hasLost: true
        });
    }

    handleWon() {
        this.setState({
            hasWon: true
        });
    }

    handleStart() {
        this.setState({
            hasStarted: true,
            hasWon: false,
            hasLost: false,
        })
    }
    handleNextLevel() {
        //needs to advance the level number
    }

    render() {
        if (this.state.hasWon) {
            //has won so return the won screen
            return (
                <Won handleStart={this.handleStart} handleNextLevel={this.handleNextLevel}/>
            );
        }
        if (this.state.hasLost) {
            return (
                <Lost handleStart={this.handleStart}/>
            );
        }
        if (this.state.hasStarted == false) {
            //game not started yet so show welcome screen
            return (
                <Start handleStart={this.handleStart} />
            );
        }
        return (
            <Canvas handleLost={this.handleLost} handleWon={this.handleWon} levelNumber={this.state.levelNumber} />
        );

    }

}
export default Game;