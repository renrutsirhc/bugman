import Directions from '../Constants/Constants.js'
class GameObject {
    static nextId = 0;
    constructor(ctx, level, i, j, squareSize) {
        this.setId();
        this.ctx = ctx;
        this.level = level;
        this.i = i;
        this.j = j;
        this.x = i * squareSize;
        this.y = j * squareSize;
        this.squareSize = squareSize;
        this.sprite = new Image();
        this.components = [];
        this.direction = Directions.Up;
        this.isMoving = false;
    }

    setId() {
        GameObject.nextId += 1;
        this.id = GameObject.nextId;
    }

    update() {
        for (let k = 0; k < this.components.length; k++) {
            this.components[k].update();
        }
    }
}

export default GameObject