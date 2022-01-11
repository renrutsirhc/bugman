import GameComponent from './GameComponent.js'
import Player from '../GameObjects/Player.js'
import PathDirectionComponent from './PathDirectionComponent.js';
import RandomDirectionComponent from './RandomDirectionComponent.js';

class SmellPlayerComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Player) {
                if (Math.abs(gameObject.i - this.owner.i) < 5 && Math.abs(gameObject.j - this.owner.j) < 5) {
                    console.log("----Can Smell----");
                    //here we switch out the direction component for a component that seeks out the player
                    for (let h = 0; h < this.owner.components.length; h++) {
                        if (this.owner.components[h] instanceof RandomDirectionComponent) {
                            this.owner.components[h] = new PathDirectionComponent(this.level, this.owner);
                        }
                    }
                    return;
                }
            }
        }
        this.owner.canSmellPlayer = false;
        console.log("Can't Smell");
        //here we switch out the seeking direction component for the random direction component
        for (let h = 0; h < this.owner.components.length; h++) {
            if (this.owner.components[h] instanceof PathDirectionComponent) {
                this.owner.components[h] = new RandomDirectionComponent(this.level, this.owner);
            }
        }
    }
}
export default SmellPlayerComponent;