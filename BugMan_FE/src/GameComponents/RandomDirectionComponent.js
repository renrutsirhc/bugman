import Directions from '../Constants/Constants.js'
import GameComponent from './GameComponent.js'
import Wall from '../GameObjects/Wall.js'

class RandomDirectionComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);

    }

    update() {
        if (this.owner.updateCount == 0) {
            let rand = Math.random() * 24;
            rand = Math.trunc(rand);
            if (rand == 0) {
                this.getDirection();
                this.owner.updateCount += 32;
            }
        }
    }

    getDirection() {
        let possibleDirections = this.generateDirections();

        let rand = Math.random() * possibleDirections.length;
        rand = Math.trunc(rand);
        this.owner.direction = possibleDirections[rand];
        this.owner.isMoving = true;
    }


    generateDirections() {
        //starts with all 4 possible directions and removes them if they are not possible
        let possibleDirections = [Directions.Left, Directions.Up, Directions.Right, Directions.Down];
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Wall) {
                switch (this.owner.direction) {
                    case Directions.Left:
                        if (gameObject.i == this.owner.i - 1 && gameObject.j == this.owner.j) {
                            possibleDirections.splice(0, 1);
                        }
                        break;
                    case Directions.Up:
                        if (gameObject.j == this.owner.j - 1 && gameObject.i == this.owner.i) {
                            possibleDirections.splice(1, 1);
                        }
                        break;
                    case Directions.Right:
                        if (gameObject.i == this.owner.i + 1 && gameObject.j == this.owner.j) {
                            possibleDirections.splice(2, 1);
                        }
                        break;
                    case Directions.Down:
                        if (gameObject.j == this.owner.j + 1 && gameObject.i == this.owner.i) {
                            possibleDirections.splice(3, 1);
                        }
                        break;
                }
            }
        }
        return possibleDirections;
    }
}

export default RandomDirectionComponent;