import GameObject from './GameObject.js'
import png from '../Assets/wall-32.png';

class Wall extends GameObject {
    constructor(ctx, level, i, j, squareSize) {
        super(ctx, level, i, j, squareSize);
        this.sprite.src = png;
    }

    update() {

    }

    draw() {      
        this.ctx.drawImage(this.sprite, this.x, this.y, this.squareSize, this.squareSize);
    }
}
export default Wall;