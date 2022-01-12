import Player from './Player.js'
import Wall from './Wall.js'
import Food from './Food.js'
import Pill from './Pill.js'
import Grasshopper from './Grasshopper.js'

class Level {
    constructor(ctx, width, height, data) {
		this.ctx = ctx;
		this.squareSize = 32;
		this.width = width;
		this.height = height;
		this.data = data.split(',');
		this.gameObjects = [];
		this.buildLevel(ctx);
		this.score = 0;
		this.hasLost = false;
		this.hasWon = false;
		
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


	//buildLevel(ctx) {
	//	for (let j = 0; j < this.height; j++) {
	//		for (let i = 0; i < this.width; i++) {
	//			switch (this.map[j][i]) {
	//				case 0:
	//					this.gameObjects.push(new Wall(ctx, this, i, j, this.squareSize));
	//					break;
	//				case 1:
	//					this.gameObjects.push(new Food(ctx, this, i, j, this.squareSize));
	//					break;
	//				case 2:
	//					//white space - load nothing
	//					break;
	//				case 3:
	//					this.gameObjects.push(new Grasshopper(ctx, this, i, j, this.squareSize));
	//					break;
	//				case 4:
	//					this.gameObjects.push(new Pill(ctx, this, i, j, this.squareSize));
	//					break;
	//				case 5:
	//					this.gameObjects.push(new Player(ctx, this, i, j, this.squareSize));
	//					break;
	//			}
	//		}
	//	}

	//}


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
