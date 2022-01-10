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
    }

    setId() {
        GameObject.nextId += 1;
        this.id = GameObject.nextId;
    }
}

export default GameObject