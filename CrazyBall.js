var RADIUS = 100;
var ball;




function start(){
	ball = new Circle (RADIUS);
	add(ball);
	setTimer(draw, 100);
	
	
}


function draw(){
    ball.setPosition(Randomizer.nextInt(RADIUS,(getWidth()-RADIUS)),Randomizer.nextInt(RADIUS,(getHeight()-RADIUS)));
    ball.setColor(Randomizer.nextColor());
}