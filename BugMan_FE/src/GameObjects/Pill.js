import GameObject from './GameObject.js'
import png from '../Assets/strawberry-32.png';

class Pill extends GameObject {
    constructor(ctx, level, i, j, squareSize) {
        super(ctx, level, i, j, squareSize);
        this.sprite.src = png;
        this.sizeModifier = 8;
        this.shrink = true;
    }

    update() {

            if (this.sizeModifier <= 4) {
                this.shrink = false;
            }
            if (this.sizeModifier >= 12) {
                this.shrink = true;
            }
            if (this.shrink) {
                this.sizeModifier -= 0.25;
            } else {
                this.sizeModifier += 0.25;
            }

    }
    draw() {
        this.ctx.drawImage(this.sprite, this.x + 4, this.y + 4, this.squareSize - this.sizeModifier, this.squareSize - this.sizeModifier);
    }
}

export default Pill;