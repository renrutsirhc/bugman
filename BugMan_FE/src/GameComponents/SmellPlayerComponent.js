import GameComponent from './GameComponent.js'
import Player from '../GameObjects/Player.js'

class SmellPlayerComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Player) {
                if (Math.abs(gameObject.i - this.owner.i) < 5 && Math.abs(gameObject.j - this.owner.j) < 5) {
                    this.owner.canSmellPlayer = true;
                    console.log("Can Smell");
                    //here we switch out the direction component for a component that seeks out the player
                    return;
                }
            }
        }
        this.owner.canSmellPlayer = false;
        console.log("Can't Smell");
        //here we switch out the seeking direction component for the random direction component
    }
}
export default SmellPlayerComponent;