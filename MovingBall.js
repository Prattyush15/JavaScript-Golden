var ball;

function start(){
	ball = new Circle(20);
	circle.setColor(Randomizer.nextColor());
	add(ball);
	
	setTimer(draw, 20);
}

function draw(){
	ball.move(2, 2);
}