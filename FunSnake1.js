var SNAKE_DIM = 10;
var SNAKE_COLOR = Color.green;
var snake;
var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var DELAY = 40;
var direction = EAST;
var dx = 3;
var dy = 3;
var num;
var snakeX;
var snakeY;
/*creates initial square and creates timer to create more squares
in order to create the illusion of 
function start(){
    snake = new Rectangle (SNAKE_DIM, SNAKE_DIM);
    snake.setPosition(getWidth()/2, getHeight()/2);
    snake.setColor(SNAKE_COLOR);
    add(snake);
    
    setTimer(move,DELAY);
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
        snakeX = snake.getX();
        snakeY = snake.getY();
        
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX + 5, snakeY);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
    if (direction == WEST){
        snakeX = snake.getX();
        snakeY = snake.getY();
        
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX-5, snakeY);
        snake.setColor(SNAKE_COLOR);
        add(snake);    
        
    }
    if (direction == NORTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY-5);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
    if (direction == SOUTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY+5);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
}