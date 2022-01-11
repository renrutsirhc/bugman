import React, { Component } from 'react';

class Lost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 id="lost-message">Boo - you lost! Play again?</h1>
        );

    }
}

export default Lost;