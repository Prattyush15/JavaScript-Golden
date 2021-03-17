var MAX_RADIUS = 100;
var MAX_CIRCLES = 100;
var counter = 0;

function start(){
	setTimer(draw, 50);
}

function draw(){
	drawCircle(Randomizer.nextInt(0, MAX_RADIUS),
			   Randomizer.nextColor(),
			   Randomizer.nextInt(0, getWidth()),
			   Randomizer.nextInt(0, getHeight()));
	
	counter++;
	
	if(counter == MAX_CIRCLES){
		stopTimer(draw);
	}
}

function drawCircle(radius, color, x, y){
	var circle = new Circle(radius);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}