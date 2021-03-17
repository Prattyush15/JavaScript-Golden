var ball;
var dx = 4;
var dy = 4;
var isPaused;

/* This program has a ball bounce around the screen. */
function start(){
	ball = new Circle(20);
	ball.setPosition(100, 100);
	add(ball);
	
	setTimer(draw, 20);

}



// Check if the ball has reached a wall.
// Then move the ball in the correct direction.
function draw(){
	checkWalls();
	ball.move(dx, dy);
	mouseClickMethod(pause);

	
}

function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}
}

function pause(){
    isPaused = true;
    if(isPaused == true){
        stopTimer(draw);
    }
    mouseClickMethod(resume);
}

function resume(){
    isPaused = false;
    if(isPaused == false){
        setTimer(draw, 20);
    }
}