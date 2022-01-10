import png from '../Assets/wall-32.png';

class Wall {
    constructor(ctx, i, j, squareSize) {
        this.ctx = ctx;
        this.i = i;
        this.j = j;
        this.x = i * squareSize;
        this.y = j * squareSize;
        this.squareSize = squareSize;
        this.sprite = new Image();
        this.sprite.src = png;
    }

    update() {

    }

    draw() {      
        this.ctx.drawImage(this.sprite, this.x, this.y, this.squareSize, this.squareSize);
    }
}
export default Wall;