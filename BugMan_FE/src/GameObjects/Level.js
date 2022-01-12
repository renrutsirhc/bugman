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

	updatePillCountDown(increment) {
		this.canvas.handleUpdatePillCountDown(increment);
    }

	buildLevel(ctx) {
		let k = 0;
		let tempObjects = [];
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
						tempObjects.push(new Grasshopper(ctx, this, i, j, this.squareSize));
						this.updateEnemies(1);
						break;
					case 4:
						this.gameObjects.push(new Pill(ctx, this, i, j, this.squareSize));
						break;
					case 5:
						tempObjects.push(new Player(ctx, this, i, j, this.squareSize));
						break;
				}
				k++;
			}
		}

		//by adding these at the end, the bugs will render on top of the food
		for (let l = 0; l < tempObjects.length; l++) {
			this.gameObjects.push(tempObjects[l]);
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
