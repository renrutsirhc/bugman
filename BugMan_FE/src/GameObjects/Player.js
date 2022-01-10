class Player {

    constructor(ctx) {
        this.ctx = ctx;
        this.x = 40;
        this.y = 40;
        document.addEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 37:
            case 65:
                //left
                this.x -= 10;
                break;
            case 38:
            case 87:
                //up
                this.y -= 10;
                break;
            case 39: 
            case 68:
                //right
                this.x += 10;
                break;
            case 40:
            case 83:
                //down
                this.y += 10;
                break;
        };
        console.log("X: " + this.x + " Y: " + this.y);
    }

    update() {

    }

    draw() {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }

}
export default Player;