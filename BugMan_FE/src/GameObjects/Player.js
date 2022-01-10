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
        this.rotation = 0;
    }

    handleKeyDown = (event) => {
        let interval;
        let k = 0;
        switch (event.keyCode) {
            case 37:
            case 65:
                //left
                this.rotation = 270;
                interval = setInterval(() => {
                    this.x -= 1;
                    k += 1;
                    if (k == 32) {
                        clearInterval(interval);
                    }
                }, 8)
                this.i -= 1;
                break;
            case 38:
            case 87:
                //up
                this.rotation = 0;
                interval = setInterval(() => {
                    this.y -= 1;
                    k += 1;
                    if (k == 32) {
                        clearInterval(interval);
                    }
                }, 8)
                this.j -= 1;
                break;
            case 39:
            case 68:
                //right
                this.rotation = 90;
                interval = setInterval(() => {
                    this.x += 1;
                    k += 1;
                    if (k == 32) {
                        clearInterval(interval);
                    }
                }, 8)
                this.i += 1;
                break;
            case 40:
            case 83:
                //down
                this.rotation = 180;
                interval = setInterval(() => {
                    this.y += 1;
                    k += 1;
                    if (k == 32) {
                        clearInterval(interval);
                    }
                }, 8)
                this.j += 1;
                break;
        };

        console.log("X: " + this.x + " Y: " + this.y);
    }

    update() {

    }

    draw() {
        this.drawRotated(this.sprite, this.x, this.y, this.rotation);
    }

    drawRotated(image, x, y, rotation) {
        this.ctx.setTransform(1, 0, 0, 1, x + image.width/2, y+image.height/2); // sets scale and origin
        this.ctx.rotate(rotation * Math.PI / 180);
        this.ctx.drawImage(image, -image.width / 2, -image.height / 2);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

}
export default Player;