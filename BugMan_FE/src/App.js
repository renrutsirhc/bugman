import React, { Component } from 'react';
import Game from './Components/Game.js';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        
    }

    

    render() {
        return (
            <div id="game-container">
                <p>hello</p>
                <Game/>
            </div>
        );
    }


}
