import Player from './Player.js'
import Wall from './Wall.js'

class Level {
    constructor(ctx) {
		this.ctx = ctx;
		this.squareSize = 32;
		this.map = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],
			[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
			[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
			[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
			[2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
			[0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],
			[5, 2, 2, 2, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 2, 2, 2, 2],
			[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
			[2, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 2, 2, 2],
			[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
			[0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],
			[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
			[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
			[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];
		this.gameObjects = [...Array(22)].map(e => Array(19));
		this.buildLevel(ctx);
		
	}

	buildLevel(ctx) {
		for (let j = 0; j < 22; j++) {
			for (let i = 0; i < 19; i++) {
				switch (this.map[j][i]) {
					case 0:
						this.gameObjects[j][i] = new Wall(ctx, i, j, this.squareSize);
						break;
					case 1:
						//this.gameObjects[j][i] = new Food(ctx);
						this.gameObjects[j][i] = null;
						break;
					case 2:
						this.gameObjects[j][i] = null;
						break;
					case 3:
						//this.gameObjects[j][i] = new Enemy(ctx);
						this.gameObjects[j][i] = null;
						break;
					case 4:
						this.gameObjects[j][i] = null;
						break;
					case 5:
						this.gameObjects[j][i] = new Player(ctx, i, j, this.squareSize);
						break;
                }
			}
        }

    }


    update() {
		for (let j = 0; j < 22; j++) {
			for (let i = 0; i < 19; i++) {
				if (this.gameObjects[j][i] != null) {
					this.gameObjects[j][i].update();
                }
			}
		}
    }

    draw() {
		for (let j = 0; j < 22; j++) {
			for (let i = 0; i < 19; i++) {
				if (this.gameObjects[j][i] != null) {
					this.gameObjects[j][i].draw();
				}
			}
		}
    }

}
export default Level;
