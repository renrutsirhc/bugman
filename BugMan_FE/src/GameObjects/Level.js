import Player from './Player.js'

class Level {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(ctx);
        this.player.draw();
    }

    update() {

    }

    draw() {
        this.player.draw();
    }

}
export default Level;
