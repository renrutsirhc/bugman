import React, { Component } from 'react';
import Canvas from './Canvas.js';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			levels: [],
			currentLevel: null,
		}
	}

	render() {
		return (
			<div id="level-container">
				<Canvas />
			</div>
		);

	}

}
export default Game;