import GameComponent from './GameComponent.js'
import Grasshopper from '../GameObjects/Grasshopper.js'

class EatGrasshopperComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Grasshopper && gameObject.i == this.owner.i && gameObject.j == this.owner.j) {
                this.level.gameObjects.splice(k, 1);
                this.level.updateScore(200);
                this.level.updateEnemies(-1);
            }
        }
    }
}
export default EatGrasshopperComponent;