import GameComponent from './GameComponent.js'
import Player from '../GameObjects/Player.js'

class EatPlayerComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Player && gameObject.i == this.owner.i && gameObject.j == this.owner.j) {
                this.level.gameObjects.splice(k, 1);
                this.level.hasLost = true;
            }
        }
    }
}
export default EatPlayerComponent;