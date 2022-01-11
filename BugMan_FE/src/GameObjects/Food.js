import GameObject from './GameObject.js'
import png from '../Assets/corn-32.png';

class Food extends GameObject {
    constructor(ctx, level, i, j, squareSize) {
        super(ctx, level, i, j, squareSize);
        this.sprite.src = png;
    }

    update() {

    }
    draw() {
        this.ctx.drawImage(this.sprite, this.x + 4, this.y + 4, this.squareSize - 8, this.squareSize - 8);
    }
}

export default Food;