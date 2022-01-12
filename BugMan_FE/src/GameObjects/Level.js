import Player from './Player.js'
import Wall from './Wall.js'
import Food from './Food.js'
import Pill from './Pill.js'
import Grasshopper from './Grasshopper.js'

class Level {
    constructor(ctx, width, height, data, canvas) {
		this.ctx = ctx;
		this.squareSize = 32;
		this.width = width;
		this.height = height;
		this.data = data.split(',');
		this.gameObjects = [];		
		this.hasLost = false;
		this.hasWon = false;
		this.canvas = canvas;
		this.buildLevel(ctx);
		
	}

	updateScore(increment) {
		this.canvas.handleUpdateScore(increment);
	}

	updateEnemies(increment) {
		this.canvas.handleUpdateEnemies(increment);
	}

	buildLevel(ctx) {
		let k = 0;
		for (let j = 0; j < this.height; j++) {
			for (let i = 0; i < this.width; i++) {
				switch (parseInt(this.data[k].trim())) {
					case 0:
						this.gameObjects.push(new Wall(ctx, this, i, j, this.squareSize));
						break;
					case 1:
						this.gameObjects.push(new Food(ctx, this, i, j, this.squareSize));						
						break;
					case 2:
						//white space - load nothing
						break;
					case 3:
						this.gameObjects.push(new Grasshopper(ctx, this, i, j, this.squareSize));
						this.updateEnemies(1);
						break;
					case 4:
						this.gameObjects.push(new Pill(ctx, this, i, j, this.squareSize));
						break;
					case 5:
						this.gameObjects.push(new Player(ctx, this, i, j, this.squareSize));
						break;
				}
				k++;
			}
        }

	}



    update() {
		for (let k = 0; k < this.gameObjects.length; k++) {
			this.gameObjects[k].update();
        }
	}

    draw() {
		for (let k = 0; k < this.gameObjects.length; k++) {
			this.gameObjects[k].draw();
		}
    }

}
export default Level;
