import React, { Component } from 'react';
import '../Styles/Start.css';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleStart: props.handleStart,
        }
    }

    render() {
        return (
            <div id="start-container">
                <h1 id="start-message">Welcome to Bugman!</h1>
                <button id="start-button" onClick={this.state.handleStart}>Play</button>
            </div>
        );

    }
}

export default Start;