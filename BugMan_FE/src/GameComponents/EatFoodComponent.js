import GameComponent from './GameComponent.js'
import Food from '../GameObjects/Food.js'

class EatFoodComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Food && gameObject.i == this.owner.i && gameObject.j == this.owner.j) {
                this.level.gameObjects.splice(k, 1);
                this.level.updateScore(1);
            }
        }
        if (this.hasWon()) {
            this.level.hasWon = true;
        }
    }

    hasWon() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            if (this.level.gameObjects[k] instanceof Food) {
                return false;
            }
        }
        return true;
    }
}
export default EatFoodComponent;