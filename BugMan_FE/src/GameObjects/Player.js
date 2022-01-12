import Directions from '../Constants/Constants.js'
import GameObject from './GameObject.js'
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
        let interval;
        let k = 0;
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

        console.log("X: " + this.x + " Y: " + this.y);
    }

    handleKeyUp = (event) => {
        this.isMoving = false;
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