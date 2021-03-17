/* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;

/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var paddle;
/*constants for the ball*/
var ball;
var dx = 3;
var dy = 3;
var BALL_RADIUS = 15;
//creates the counter variable
var counter = 0;
var x=0;
var y=0;
var elem;

function start(){
    makePaddle();
    mouseMoveMethod(movePaddle);
    addBall();
	for(var i = 0; i<NUM_ROWS; i++){
	    //made x2 to align the bricks to the center of the screen
	    x=2;
	    /*increases counter by 1 in order to create the next row of 
	    bricks
	    */
	    counter++;
	    //calls the rowchecker function
	    rowChecker(counter);
	    /*adds onto the y value in order to create the spacing in the
	    rows*/
	    y+=BRICK_HEIGHT+BRICK_SPACING;

	
	    setTimer(ballMovement, 100);
	}
	
}

function rowChecker(counter){
    //draws red brick row for rows 1&2
    if(counter%8==1||counter%8==2){
        drawBrick(Color.red);
    //draws yellow brick row for rows 1&2
    }else if(counter%8==3||counter%8==4){
        drawBrick(Color.yellow);
    //draws green brick row for rows 1&2
    }else if(counter%8==5||counter%8==6){
        drawBrick(Color.green);
    //draws blue brick row for rows 1&2
    }else if(counter%8==7||counter%8==0){
        drawBrick(Color.blue);
    }
}
/*this function creates the row of bricks for each time
the function is called on*/
function drawBrick(color){
    for(var i = 0; i<NUM_BRICKS_PER_ROW; i++){
        var brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        brick.setPosition(x,y);
        brick.setColor(color);
        add(brick);
        /*adds onto the x value to create the spacing between bricks
        across the x-axis*/
        x+=BRICK_WIDTH+BRICK_SPACING;
    }
}


//this function creates the paddle and places at the bottom of the screen
function makePaddle(){
    paddle=new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition(getWidth()/2 - PADDLE_WIDTH/2, getHeight()/2-PADDLE_HEIGHT-PADDLE_OFFSET);
    add(paddle);
}

function movePaddle(e){
    //this sets the position of the paddle to wherever your mouse is 
    paddle.setPosition(e.getX() - PADDLE_WIDTH / 2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    /*this if statement check if your mouse crosses the left side of the games
    border and if so, it will not move the paddle along with it
    and will keep the paddle at the x coordinate of 0
    */
    if(e.getX()<=PADDLE_WIDTH/2){
        paddle.setPosition(0,getHeight()-PADDLE_HEIGHT-PADDLE_OFFSET);
    /*This if statement check if you mouse crosses the right border and if so,
    it will not move the paddle along with it and keep the 
    paddle on the farthest right side of the screen
    */
    }else if(e.getX()>=getWidth()-PADDLE_WIDTH/2){
        paddle.setPosition(getWidth()-PADDLE_WIDTH, getHeight()-PADDLE_HEIGHT-PADDLE_OFFSET);
    }
}
/*this function creats the ball and sets the position to the middle
of the screen
*/
function addBall(){
    ball = new Circle (BALL_RADIUS);
    ball.setPosition(getWidth()/2, getHeight()/2);
    add(ball);
}

//moves the ball around and calls the functions check walls and check bricks
function ballMovement(){
    checkBricks();
    ball.move(dx,dy);
    checkWalls();

}

/* This function will prevent the ball from going off the borders
of the game and instead it will bounce the ball of the wall
*/

function checkWalls(){
	/* If the balls closest side to the right border touches the right side,
	the ball will immeadiately change directions so that it will
	be going left instead of right and off the game
	*/
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}
	
/* If the balls closest side to the left border touches the left side,
	the ball will immeadiately change directions so that it will
	be going right instead of left and off the game
	*/
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}
	
/* If the balls closest side to the bottom border touches the bottom,
	the game will stop and you will have to refresh the page for the game
	to work again
	*/
	if(ball.getY() - ball.getRadius() > getHeight()){
        pause();
    }
	
/* If the balls closest side to the top border touches the top,
	the ball will immeadiately change directions so that it will
	be going down instead of up and off the game
	*/
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}
/* If the balls closest side to the bottm border touches the paddle, 
	the ball will immeadiately change directions so that it will
	be going up instead of down and off the game
	*/

	if(ball.getY() + BALL_RADIUS >= paddle.getY() - PADDLE_HEIGHT){
	    elem = getElementAt(ball.getX(), ball.getY() + ball.getRadius());
	    if (elem != null){
	        dy = -dy;
	        ball.setColor(paddle.getColor());
	        paddle.setColor(Randomizer.nextColor());
	    }
	}
    
}

/* this function checks if the ball is touching a brick and if so, the code
uses getElementAt this position and removes it
*/

function checkBricks(){
    //makes sure that the ball will only remove bricks and not the paddle
    if (ball.getY() - BALL_RADIUS * 3 <= NUM_ROWS * BRICK_HEIGHT){
        //checks the top of the ball and what it is touching
        elem = getElementAt(ball.getX(), ball.getY() - ball.getRadius());
        if (elem != null){
            ball.setColor(elem.getColor);
            dy = -dy;
            remove(elem);
            
        }
    
    
        elem = getElementAt(ball.getX() + ball.getRadius(), ball.getY());
            if (elem != null){
            //checks the right side of the ball and what it is touching
                ball.setColor(elem.getColor);
                //bounces to the left
                dx = -dx;
                //removes the brick that is touching the ball
                remove(elem);
                
            }
    
        elem = getElementAt(ball.getX() - ball.getRadius(), ball.getY());
            //checks the left side of the ball and what it is touching
            if (elem != null){
                ball.setColor(elem.getColor);
                //bounces to the right
                dx = -dx;
                //removes the brick that is touching the ball
                remove(elem);
                
            }
    
        elem = getElementAt(ball.getX(), ball.getY()+ ball.getRadius());
            //checks the bottom of the ball and what it is touching
            if (elem != null){
                ball.setColor(elem.getColor);
            //bounces back up
                dy = -dy;
            //removes the brick that is touching the ball
                remove(elem);
            }
    }
}
//stops the ball from moving
function pause(){
    stopTimer(ballMovement);
}