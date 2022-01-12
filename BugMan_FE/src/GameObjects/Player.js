import Directions from '../Constants/Constants.js'
import GameObject from './GameObject.js'
import Wall from './Wall.js'
import MoveComponent from '../GameComponents/MoveComponent.js'
import EatFoodComponent from '../GameComponents/EatFoodComponent.js'
import EatPillComponent from '../GameComponents/EatPillComponent.js'
import png from '../Assets/ant-32.png';

class Player extends GameObject{

    constructor(ctx, level, i, j, squareSize) {
        super(ctx, level, i, j, squareSize);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
        this.sprite.src = png;
        this.components.push(new MoveComponent(level, this));
        this.components.push(new EatFoodComponent(level, this));
        this.components.push(new EatPillComponent(level, this));
    }


    handleKeyDown = (event) => {
        if (!this.isMoving && this.updateCount == 0) {
            switch (event.keyCode) {
                case 37:
                case 65:
                    //left
                    this.direction = Directions.Left;
                    this.isMoving = true;
                    break;
                case 38:
                case 87:
                    //up
                    this.direction = Directions.Up;
                    this.isMoving = true;
                    break;
                case 39:
                case 68:
                    //right
                    this.direction = Directions.Right;
                    this.isMoving = true;
                    break;
                case 40:
                case 83:
                    //down
                    this.direction = Directions.Down;
                    this.isMoving = true;
                    break;
            };
            if (this.canMove()) {
                this.updateCount = 32;
            }
        }

        
        console.log("X: " + this.x + " Y: " + this.y);
    }

    canMove() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Wall) {
                switch (this.direction) {
                    case Directions.Left:
                        if (gameObject.i == Math.ceil(this.x / 32) - 1 && gameObject.j == this.j) {
                            return false;
                        }
                        break;
                    case Directions.Up:
                        if (gameObject.j == Math.ceil(this.y / 32) - 1 && gameObject.i == this.i) {
                            return false;
                        }
                        break;
                    case Directions.Right:
                        if (gameObject.i == Math.floor(this.x / 32) + 1 && gameObject.j == this.j) {
                            return false;
                        }
                        break;
                    case Directions.Down:
                        if (gameObject.j == Math.floor(this.y / 32) + 1 && gameObject.i == this.i) {
                            return false;
                        }
                        break;
                }
            }
        }
        return true;
    }


    draw() {
        this.drawRotated(this.sprite, this.x, this.y, this.direction);
    }

    drawRotated(image, x, y, rotation) {
        this.ctx.setTransform(1, 0, 0, 1, x + image.width/2, y+image.height/2); // sets scale and origin
        this.ctx.rotate(rotation * Math.PI / 180);
        this.ctx.drawImage(image, -image.width / 2, -image.height / 2);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

}
export default Player;