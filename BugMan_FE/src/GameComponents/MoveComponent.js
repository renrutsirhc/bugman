import Directions from '../Constants/Constants.js'
import GameComponent from './GameComponent.js'
import Wall from '../GameObjects/Wall.js'

class MoveComponent extends GameComponent{
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        let interval;
        let k = 0;
        if (this.owner.isMoving) {
            switch (this.owner.direction) {
                case Directions.Left:
                    if (this.canMove()) {
                        if (this.owner.i - 1 < 0) {
                            //player appears at the other side of the map
                            this.owner.i = this.level.width - 1;
                            this.owner.x = this.owner.i * this.level.squareSize;
                        } else {
                            interval = setInterval(() => {
                                this.owner.x -= 1;
                                k += 1;
                                if (k == 32) {
                                    clearInterval(interval);
                                }
                            }, 8)
                            this.owner.i -= 1;
                        }
                    }
                    break;
                case Directions.Up:
                    if (this.canMove()) {
                        if (this.owner.j - 1 < 0) {
                            //player appears at the other side of the map
                            this.owner.j = this.level.height - 1;
                            this.owner.y = this.owner.j * this.level.squareSize;
                        } else {
                            interval = setInterval(() => {
                                this.owner.y -= 1;
                                k += 1;
                                if (k == 32) {
                                    clearInterval(interval);
                                }
                            }, 8)
                            this.owner.j -= 1;
                        }
                    }
                    break;
                case Directions.Right:
                    if (this.canMove()) {
                        if (this.owner.i >= this.level.width -1) {
                            //player appears at the other side of the map
                            this.owner.i = 0;
                            this.owner.x = this.owner.i * this.level.squareSize;
                        } else {
                            interval = setInterval(() => {
                                this.owner.x += 1;
                                k += 1;
                                if (k == 32) {
                                    clearInterval(interval);
                                }
                            }, 8)
                            this.owner.i += 1;
                        }
                    }
                    break;
                case Directions.Down:
                    if (this.canMove()) {
                        interval = setInterval(() => {
                            this.owner.y += 1;
                            k += 1;
                            if (k == 32) {
                                clearInterval(interval);
                            }
                        }, 8)
                        this.owner.j += 1;
                    }
                    break;
            }
            this.owner.isMoving = false;
        }
    }

    canMove() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Wall) {
                switch (this.owner.direction) {
                    case Directions.Left:
                        if (gameObject.i == this.owner.i - 1 && gameObject.j == this.owner.j) {
                            return false;
                        }
                        break;
                    case Directions.Up:
                        if (gameObject.j == this.owner.j - 1 && gameObject.i == this.owner.i) {
                            return false;
                        }
                        break;
                    case Directions.Right:
                        if (gameObject.i == this.owner.i + 1 && gameObject.j == this.owner.j) {
                            return false;
                        }
                        break;
                    case Directions.Down:
                        if (gameObject.j == this.owner.j + 1 && gameObject.i == this.owner.i) {
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