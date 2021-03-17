var FOOD_DELAY = 6000;
var FOOD_RADIUS = 5;
var FOOD_COLOR = Color.red;

var SNAKE_DIM = 10;
var SNAKE_COLOR = Color.green;

var snake;
var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var DELAY = 40;
var food;

var direction = EAST;
var dx = 3;
var dy = 3;
var num;
var snakeX;
var snakeY;
function start(){
    snake = new Rectangle (SNAKE_DIM, SNAKE_DIM);
    snake.setPosition(getWidth()/2, getHeight()/2);
    snake.setColor(SNAKE_COLOR);
    add(snake);
    
    food = new Circle(FOOD_RADIUS);
    food.setPosition((SNAKE_DIM*Randomizer.nextInt(1,(getWidth()/SNAKE_DIM)-1)), (FOOD_RADIUS*Randomizer.nextInt(1,(getHeight()/FOOD_RADIUS)-1)));    
    
    if(food.getY()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    
    if(food.getX()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    
    food.setColor(FOOD_COLOR);
    add(food);
    
    setTimer(move,DELAY);
    setTimer(makeFood, FOOD_DELAY);
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
        crash(snakeX+1.5*SNAKE_DIM, snakeY + (SNAKE_DIM/2));
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX + 5, snakeY);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
    if (direction == WEST){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX - (SNAKE_DIM/2), snakeY + (SNAKE_DIM/2));
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX-5, snakeY);
        snake.setColor(SNAKE_COLOR);
        add(snake);    
        
    }
    if (direction == NORTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX + (SNAKE_DIM/2), snakeY-(SNAKE_DIM/2));
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY-5);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
    if (direction == SOUTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX + (SNAKE_DIM/2), snakeY+1.5*SNAKE_DIM);
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY+5);
        snake.setColor(SNAKE_COLOR);
        add(snake);
    }
}

function crash(x,y){
    var elem = getElementAt(x,y);
    if (elem !=null){
        if(elem.getType() == "Rectangle"){
            stopTimer(move);
            stopTimer(makeFood);
            var txt = new Text("You Lose.", "30pt Arial");
            txt.setPosition(getWidth()/2-100, getHeight()/2);
            txt.setColor(Color.black);
            add(txt);
    
        }else if (elem.getType() == "Circle"){
            remove(food);
        }
    }
}
function makeFood(){
    food = new Circle(FOOD_RADIUS);
    food.setPosition((SNAKE_DIM*Randomizer.nextInt(1,(getWidth()/SNAKE_DIM)-1)), (FOOD_RADIUS*Randomizer.nextInt(1,(getHeight()/FOOD_RADIUS)-1)));
    
    if(food.getY()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    if(food.getX()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    
    food.setColor(FOOD_COLOR);
    add(food);
    
}