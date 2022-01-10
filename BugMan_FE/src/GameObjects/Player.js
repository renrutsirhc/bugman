import React, { Component } from 'react';
import CanvasContext from '../Components/CanvasContext.js'

class Player {

    constructor(ctx) {
        this.ctx = ctx;
        this.x = 40;
        this.y = 40;
    }

    update() {

    }

    draw() {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

}
export default Player;