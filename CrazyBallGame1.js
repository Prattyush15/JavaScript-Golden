var RADIUS = 100;
var OFF_SCREEN = -200;
var DELAY = 500;
var ball;

// This is the entrance to our program,
// the crazy ball game.
function start(){
	setupBall();
	setTimer(changeBall, DELAY);
}

// This changes some properties of the
// ball-- it sets its position to a random
// location on the screen, and changes 
// its color to red, green, or yellow.
function changeBall(){
	var x = Randomizer.nextInt(ball.getRadius(),
		getWidth() - ball.getRadius());
	var y = Randomizer.nextInt(ball.getRadius(), getHeight() - ball.getRadius());
	
	ball.setPosition(x, y);
	changeColor();
}

// This function changes the color of the 
// ball by picking a random number: 0, 1 
// or 2, and then using that number to 
// pick a color.
function changeColor(){
	var colorCode = Randomizer.nextInt(0, 2);
	var color;
	if(colorCode == 0){
		color = Color.red;
	}else if(colorCode == 1){
		color = Color.yellow;
	}else{
		color = Color.green;
	}
	
	ball.setColor(color);
}

// This does the initial setup of the 
// ball, and places it offscreen.
function setupBall(){
	ball = new Circle(RADIUS);
	ball.setPosition(OFF_SCREEN, OFF_SCREEN);
	add(ball);
}