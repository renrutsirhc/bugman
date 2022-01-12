import GameComponent from './GameComponent.js'
import Pill from '../GameObjects/Pill.js'
import Player from '../GameObjects/Player.js'
import Grasshopper from '../GameObjects/Grasshopper.js'
import EatPlayerComponent from '../GameComponents/EatPlayerComponent.js'
import EatGrasshopperComponent from '../GameComponents/EatGrasshopperComponent.js'
import grasshopperVulnerable from '../Assets/grasshopper-vulnerable-32.png';
import grasshopperNormal from '../Assets/grasshopper-32.png'
import antInvulnerable from '../Assets/ant-invulnerable-32.png';
import antNormal from '../Assets/ant-32.png';


class EatPillComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
        this.pillTimer = -1;
    }

    update() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Pill && gameObject.i == this.owner.i && gameObject.j == this.owner.j) {
                this.level.gameObjects.splice(k, 1);
                this.level.updateScore(20);
                this.pillEaten();

            }
        }
        this.level.updatePillCountDown(Math.floor(this.pillTimer / 10));
        if (this.pillTimer > 0) {
            this.pillTimer -= 0.25;
        } else if (this.pillTimer != -1) {
            this.pillEffectEnd();
        } 
        
    }

    pillEaten() {
        this.pillTimer = 100;
        
             
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Grasshopper) {
                //need to remove eatplayercomponent from grasshopper
                for (let l = 0; l < gameObject.components.length; l++) {
                    if (gameObject.components[l] instanceof EatPlayerComponent) {
                        gameObject.components.splice(l, 1);                       
                    }
                }
                gameObject.sprite.src = grasshopperVulnerable;
            }
            if (gameObject instanceof Player) {
                //add eat grasshopper component to player
                if (!this.containsEatGrasshopperComponent(gameObject)) {
                    gameObject.components.push(new EatGrasshopperComponent(this.level, gameObject))
                    gameObject.sprite.src = antInvulnerable;
                }
            }
        }       
    }
     
    pillEffectEnd() {
        this.pillTimer = -1;

        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Grasshopper) {
                //need to add eatplayercomponent to grasshopper if it doesn't already have it
                if (!this.containsEatPlayerComponent(gameObject)) {
                    gameObject.components.push(new EatPlayerComponent(this.level, gameObject))
                    gameObject.sprite.src = grasshopperNormal;
                }
            }
            if (gameObject instanceof Player) {
                //remove eat grasshopper component from player
                for (let l = 0; l < gameObject.components.length; l++) {
                    if (gameObject.components[l] instanceof EatGrasshopperComponent) {
                        gameObject.components.splice(l, 1);
                    }
                }
                gameObject.sprite.src = antNormal;
            }
        }       
    }

    containsEatPlayerComponent(gameObject) {
        for (let l = 0; l < gameObject.components; l++) {
            if (gameObject.components[l] instanceof EatPlayerComponent) {
                return true;
            }
        }
        return false;
    }

    containsEatGrasshopperComponent(gameObject) {
        for (let l = 0; l < gameObject.components; l++) {
            if (gameObject.components[l] instanceof EatGrasshopperComponent) {
                return true;
            }
        }
        return false;
    }

}
export default EatPillComponent;