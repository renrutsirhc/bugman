import Directions from '../Constants/Constants.js'
import GameComponent from './GameComponent.js'
import Wall from '../GameObjects/Wall.js'
import Player from '../GameObjects/Player.js'

class PathDirectionComponent extends GameComponent {
    constructor(level, owner) {
        super(level, owner);
    }

    update() {
        let rand = Math.random() * 16;
        rand = Math.trunc(rand);
        if (rand == 0) {
            this.getDirection();
        }      
    }

    getDirection() {
        let path = this.getShortestPath();

        let penUltimate = path[path.length - 2];

        if (penUltimate.i < this.owner.i && penUltimate.j == this.owner.j) {
            this.owner.direction = Directions.Left;
            this.owner.isMoving = true;
            return;
        }
        if (penUltimate.j < this.owner.j && penUltimate.i == this.owner.i) {
            this.owner.direction = Directions.Up;
            this.owner.isMoving = true;
            return;
        }
        if (penUltimate.i > this.owner.i && penUltimate.j == this.owner.j) {
            this.owner.direction = Directions.Right;
            this.owner.isMoving = true;
            return;
        }
        if (penUltimate.j > this.owner.j && penUltimate.i == this.owner.i) {
            this.owner.direction = Directions.Down;
            this.owner.isMoving = true;
            return;
        }
        

        
    }

    getShortestPath() {
        let queue = [];
        //initialise viseted grid with false values
        let visited = [...Array(this.level.height)].map(e => Array(this.level.width).fill(false));
        let playerI = this.getPlayerI();
        let playerJ = this.getPlayerJ();
        let parentMap = new Map();
        let square;

        //Initialise
        queue.push({
            i: this.owner.i,
            j: this.owner.j,
        });
        parentMap.set(this.owner.i + "-" + this.owner.j, null);

        while (queue.length > 0) {
            square = queue.shift();
            visited[square.i][square.j] = true;

            if (square.i == playerI && square.j == playerJ) {
                break;
            }

            this.exploreNeighbours(visited, queue, square, parentMap);

        }

        let path = [];
        let cur = square;
        while (cur != null) {
            path.push(cur);
            let key = cur.i + "-" + cur.j;
            cur = parentMap.get(key);
        }
        return path;

    }

    exploreNeighbours(visited, queue, square, parentMap) {
        let rowModifiers = [-1, 0, 1, 0];
        let columnModifiers = [0, -1, 0, 1];
        for (let k = 0; k < 4; k++) {
            let x = square.i + rowModifiers[k];
            let y = square.j + columnModifiers[k];

            //skip out of bounds
            if (x < 0 || y < 0) {
                continue;
            }
            if (x >= this.level.width || y >= this.level.height) {
                continue;
            }

            //skip visited
            if (visited[x][y]) {
                continue;
            }

            //skip if wall
            if (this.isWall(x, y)) {
                continue;
            }

            queue.push({ i: x, j: y,});
            parentMap.set(x + "-" + y, square);
            visited[x][y] = true;
        }
    }





    getPlayerI() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Player) {
                return gameObject.i;
            }
        }
        return -1;
    }

    getPlayerJ() {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject instanceof Player) {
                return gameObject.j;
            }
        }
        return -1;
    }

    isWall(i, j) {
        for (let k = 0; k < this.level.gameObjects.length; k++) {
            let gameObject = this.level.gameObjects[k];
            if (gameObject.i == i && gameObject.j == j && gameObject instanceof Wall) {
                return true;
            }
        }
        return false;
    }
}
export default PathDirectionComponent;

