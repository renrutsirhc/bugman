import Directions from '../Constants/Constants.js'
import GameComponent from './GameComponent.js'
import Wall from '../GameObjects/Wall.js'

class MoveComponent extends GameComponent{
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        console.log(this.owner.updateCount);
        if (this.owner.updateCount > 0) {
            switch (this.owner.direction) {
                case Directions.Left:
                    if (this.canMove()) {
                        if (this.owner.x - 1 < 0) {
                            //player appears at the other side of the map
                            this.owner.x = (this.level.width - 1) * 32;
                            this.owner.i = Math.round(this.owner.x / 32);
                            this.owner.updateCount = 2;
                        } else {
                            this.owner.x -= 2;
                            this.owner.i = Math.round(this.owner.x / 32);
                        }
                    }
                    break;
                case Directions.Up:
                    if (this.canMove()) {
                        if (this.owner.y - 1 < 0) {
                            //player appears at the other side of the map
                            this.owner.y = (this.level.height - 1) * 32;
                            this.owner.j = Math.round(this.owner.y / 32);
                            this.owner.updateCount = 2;
                        } else {
                            this.owner.y -= 2;
                            this.owner.j = Math.round(this.owner.y / 32);
                        }
                    }
                    break;
                case Directions.Right:
                    if (this.canMove()) {
                        if (this.owner.x >= (this.level.width - 1) * 32) {
                            //player appears at the other side of the map
                            this.owner.x = 0;
                            this.owner.i = Math.round(this.owner.x / 32);
                            this.owner.updateCount = 2;
                        } else {
                            this.owner.x += 2;
                            this.owner.i = Math.round(this.owner.x / 32);
                        }
                    }
                    break;
                case Directions.Down:
                    if (this.canMove()) {
                        if (this.owner.y >= (this.level.height - 1) * 32) {
                            //player appears at the other side of the map
                            this.owner.y = 0;
                            this.owner.j = Math.round(this.owner.y / 32);
                            this.owner.updateCount = 2;
                        } else {
                            this.owner.y += 2;
                            this.owner.j = Math.round(this.owner.y / 32);
                        }
                    }
                    break;
            }
            this.owner.updateCount -= 2;
        } else {
            this.owner.isMoving = false
        }
    }

    canMove() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Wall) {
                switch (this.owner.direction) {
                    case Directions.Left:
                        if (gameObject.i == Math.ceil(this.owner.x/32) - 1 && gameObject.j == this.owner.j) {
                            return false;
                        }
                        break;
                    case Directions.Up:
                        if (gameObject.j == Math.ceil(this.owner.y/32) - 1 && gameObject.i == this.owner.i) {
                            return false;
                        }
                        break;
                    case Directions.Right:
                        if (gameObject.i == Math.floor(this.owner.x/32) + 1 && gameObject.j == this.owner.j) {
                            return false;
                        }
                        break;
                    case Directions.Down:
                        if (gameObject.j == Math.floor(this.owner.y/32) + 1 && gameObject.i == this.owner.i) {
                            return false;
                        }
                        break;
                }
            }
        }
        return true;
    }
}

export default MoveComponent;