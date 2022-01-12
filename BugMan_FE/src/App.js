import React, { Component } from 'react';
import Game from './Components/Game.js';
import './Styles/App.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Game />
        );
    }


}
