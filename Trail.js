var MAX_BOUNCES = 20;

var ball;
var dx = 4;
var dy = 4;
var counter = 0;

/* This program has a ball bounce around the screen. 
 * Its path is drawn by drawing different colored balls everywhere it goes.
 */
function start(){
	ball = new Circle(20);
	ball.setPosition(50, 70);
	add(ball);
	
	setTimer(draw, 20);
	print(counter);
}

// Check if the ball has reached a wall.
// Then move the ball in the correct direction.
function draw(){
	checkWalls();
	checkCircle();
	ball.move(dx, dy);
}

function checkCircle(){
    var circle = new Circle (10);
    circle.setPosition(ball.getX(), ball.getY());
    circle.setColor(Color.cyan);
    add(circle);
    
    
}

function checkWalls(){
    if (counter==MAX_BOUNCES){
        stopTimer(draw);
    }
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
		counter++;
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
		counter++;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
		counter++;
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
		counter++;
	}
}