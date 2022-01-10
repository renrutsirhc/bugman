import React, { Component } from 'react';
import Level from './Level.js';

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
				<Level />
			</div>
		);

	}

}
export default Game;