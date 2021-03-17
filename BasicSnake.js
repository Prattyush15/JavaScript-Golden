var SNAKE_WIDTH = 40;
var SNAKE_HEIGHT = 40;
var SNAKE_COLOR = Color.green;
var square;
var x = getWidth()/2;
var y = getHeight()/2;
// Constants to represent the directions
var EAST = 0;
var SOUTH = 1;
var WEST = 2;
var NORTH = 3;

var direction = EAST;
var dx = 5;
var dy = 5;
var num;
function start(){
	square = new Rectangle(40, 40);
	square.setPosition(x-20, y-20);
	square.setColor(Color.green);
	add(square);
	
	setTimer(move,40);
	keyDownMethod(keyDown);
}

function keyDown(e){
	if(e.keyCode == Keyboard.LEFT){
        direction = WEST;
	}
	
	if(e.keyCode == Keyboard.RIGHT){
        direction = EAST;
	}
	
	if(e.keyCode == Keyboard.UP){
        direction = NORTH;
	}
	
	if(e.keyCode == Keyboard.DOWN){
        direction = SOUTH;
	}
}

function move(){
    if (direction == EAST){
        square.move(dx,0);
    }
    if (direction == WEST){
        square.move(-dx,0);
    }
    if (direction == NORTH){
        square.move(0,-dy);
    }
    if (direction == SOUTH){
        square.move(0,dy);
    }
}