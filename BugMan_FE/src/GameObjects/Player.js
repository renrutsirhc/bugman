import png from '../Assets/ant-32.png';

class Player {

    constructor(ctx, i, j, squareSize) {
        this.ctx = ctx;
        this.i = i;
        this.j = j;
        this.x = i * squareSize;
        this.y = j * squareSize;
        this.squareSize = squareSize;
        document.addEventListener("keydown", this.handleKeyDown)
        this.sprite = new Image();
        this.sprite.src = png;
    }

    handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 37:
            case 65:
                //left
                this.i -= 1;
                break;
            case 38:
            case 87:
                //up
                this.j -= 1;
                break;
            case 39: 
            case 68:
                //right
                this.i += 1;
                break;
            case 40:
            case 83:
                //down
                this.j += 1;
                break;
        };
        this.x = this.i * this.squareSize;
        this.y = this.j * this.squareSize;
        console.log("X: " + this.x + " Y: " + this.y);
    }

    update() {

    }

    draw() {
        this.ctx.drawImage(this.sprite, this.x, this.y, this.squareSize, this.squareSize);
    }

}
export default Player;