import Directions from '../Constants/Constants.js'
import GameObject from './GameObject.js'
import MoveComponent from '../GameComponents/MoveComponent.js'
import RandomDirectionComponent from '../GameComponents/RandomDirectionComponent.js'
import EatPlayerComponent from '../GameComponents/EatPlayerComponent.js'
import png from '../Assets/grasshopper-32.png';

class Grasshopper extends GameObject {
    constructor(ctx, level, i, j, squareSize) {
        super(ctx, level, i, j, squareSize);
        this.sprite.src = png;

        this.components.push(new RandomDirectionComponent(level, this));
        this.components.push(new MoveComponent(level, this));
        this.components.push(new EatPlayerComponent(level, this));
    }

    draw() {
        this.drawRotated(this.sprite, this.x, this.y, this.direction);
    }

    drawRotated(image, x, y, rotation) {
        this.ctx.setTransform(1, 0, 0, 1, x + image.width / 2, y + image.height / 2); // sets scale and origin
        this.ctx.rotate(rotation * Math.PI / 180);
        this.ctx.drawImage(image, -image.width / 2, -image.height / 2);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export default Grasshopper;