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

var BALL_RADIUS = 15;
//creates the counter variable
var counter = 0;
var x=0;
var y=0;

function start(){
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