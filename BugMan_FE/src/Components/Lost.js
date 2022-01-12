import React, { Component } from 'react';

class Lost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleStart: props.handleStart,
        }
    }

    render() {
        return (
            <div id="lost-container">
                <h1 id="lost-message">Boo - you lost! Play again?</h1>
                <button id="start-button" onClick={this.state.handleStart}>Play Level Again</button>
            </div>
        );

    }
}

export default Lost;