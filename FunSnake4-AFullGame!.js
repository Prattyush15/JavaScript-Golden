var POINTS_TEXT_X = 5;
var POINTS_TEXT_Y_BUFFER = 5;
var POINTS_FONT = "17pt Arial";

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
var counter = 0;

var direction = EAST;
var dx = 3;
var dy = 3;
var num;
var snakeX;
var snakeY;
var puntos;

function start(){
//creates the starting square for snake
    snake = new Rectangle (SNAKE_DIM, SNAKE_DIM);
    snake.setPosition(getWidth()/2, getHeight()/2);
    snake.setColor(SNAKE_COLOR);
    add(snake);
//creates the first pellet of food
    food = new Circle(FOOD_RADIUS);
    food.setPosition((SNAKE_DIM*Randomizer.nextInt(1,(getWidth()/SNAKE_DIM)-1)), (FOOD_RADIUS*Randomizer.nextInt(1,(getHeight()/FOOD_RADIUS)-1)));    
//sets position of ze food
    if(food.getY()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    
    if(food.getX()%10 !=0){
        food.setPosition(food.getX()-10, food.getY());
    }
//sets color of le food
    food.setColor(FOOD_COLOR);
//creates the food
    add(food);
//starts the points counter
    puntos = new Text (counter, POINTS_FONT);
    puntos.setPosition(POINTS_TEXT_X, getHeight() - POINTS_TEXT_Y_BUFFER);
    puntos.setColor(Color.black);
    add(puntos);
//timers to move the snake and create the food
    setTimer(move,DELAY);
    setTimer(makeFood, FOOD_DELAY);
	keyDownMethod(keyDown);
    
}

function keyDown(e){
/*if you press left on the keyboard, it sets the direction of the snake
to West*/
	if(e.keyCode == Keyboard.LEFT){
        direction = WEST;
	}
/*if you press right on the keyboard, it sets the direction of the snake
to East*/
	if(e.keyCode == Keyboard.RIGHT){
        direction = EAST;
	}
/*if you press up on the keyboard, it sets the direction of the snake
to North*/
	if(e.keyCode == Keyboard.UP){
        direction = NORTH;
	}
/*if you press down on the keyboard, it sets the direction of the snake
to South*/
	if(e.keyCode == Keyboard.DOWN){
        direction = SOUTH;
	}
}

function move(){
//creates squares in the East direction for the snake
    if (direction == EAST){
        //checks snake location
        snakeX = snake.getX();
        snakeY = snake.getY();
        //checks if the snake crashes
        crash(snakeX+1.5*SNAKE_DIM, snakeY + (SNAKE_DIM/2));
        //creates new squares to create the snake
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        //sets the position + 5 to create the illusion of the 
        //snake moving in the East direction
        snake.setPosition(snakeX + 5, snakeY);
        snake.setColor(SNAKE_COLOR);
//checks to see if snake goes through the borders and will move
//the snake to the other side
        compruebaLosBordes(snake.getX(), snake.getY());
        add(snake);
//adds 1 point for every snake square created
        addPuntos(1);
    }
//repeat above 3 more times for each direction
    if (direction == WEST){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX - (SNAKE_DIM/2), snakeY + (SNAKE_DIM/2));
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX-5, snakeY);
        snake.setColor(SNAKE_COLOR);
        compruebaLosBordes(snake.getX(), snake.getY());
        add(snake); 
        addPuntos(1);
        
    }
    if (direction == NORTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX + (SNAKE_DIM/2), snakeY-(SNAKE_DIM/2));
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY-5);
        snake.setColor(SNAKE_COLOR);
        compruebaLosBordes(snake.getX(), snake.getY());
        add(snake);
        addPuntos(1);
    }
    if (direction == SOUTH){
        snakeX = snake.getX();
        snakeY = snake.getY();
        crash(snakeX + (SNAKE_DIM/2), snakeY+1.5*SNAKE_DIM);
        snake = new Rectangle(SNAKE_DIM, SNAKE_DIM);
        snake.setPosition(snakeX, snakeY+5);
        snake.setColor(SNAKE_COLOR);
        compruebaLosBordes(snake.getX(), snake.getY());
        add(snake);
        addPuntos(1);
    }
}
//checks to see if the snake crashes
function crash(x,y){
    var elem = getElementAt(x,y);
    if (elem !=null){
    //checks if the element is a rectangle and if so, it will
    //stop the timers and puts the You Lose text on the screen
        if(elem.getType() == "Rectangle"){
            stopTimer(move);
            stopTimer(makeFood);
            var txt = new Text("You Lose.", "30pt Arial");
            txt.setPosition(getWidth()/2-100, getHeight()/2);
            txt.setColor(Color.black);
            add(txt);
    //if it is a circle, it will take off that circle and add
    //100 points
        }else if (elem.getType() == "Circle"){
            remove(food);
            addPuntos(100);
        }
    }
}
//creates the food
function makeFood(){
//creates the food and positions them randomly within the constraints
    food = new Circle(FOOD_RADIUS);
    food.setPosition((SNAKE_DIM*Randomizer.nextInt(1,(getWidth()/SNAKE_DIM)-1)), (FOOD_RADIUS*Randomizer.nextInt(1,(getHeight()/FOOD_RADIUS)-1)));
//places the foods position
    if(food.getY()%10 !=0){
        food.setPosition(food.getX(), food.getY());
    }
    if(food.getX()%10 !=0){
        food.setPosition(food.getX()-10, food.getY());
    }
//sets color to FOOD_COLOR
    food.setColor(FOOD_COLOR);
//creates the food
    add(food);
}
//creates the counter and adds onto counter depending on how many
//points are being added
function addPuntos(num){
    counter = counter + num;
    puntos.setText(counter);
}

//checks to see if the snake is crossing teh border and if so, 
//it will reposition the snake on the corresponding side on the 
//other side of the area
function compruebaLosBordes(x,y){
    if(x > getWidth()){
        snake.setPosition(0, y);
    }
    
    if (x<0){
        snake.setPosition(getWidth(), y);
    }
    
    if (y > getHeight()){
        snake.setPosition(x,0);
    }
    
    if (y < 0){
        snake.setPosition(x,getHeight());
    }
}