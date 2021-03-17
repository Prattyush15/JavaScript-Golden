var POLE_WIDTH = 5;
var LIGHT_RADIUS = 10;
var LIGHT_REQUIRED_HEIGHT = 200;

function start(){
	drawBuilding(50, 200, 50);
	drawBuilding(100, 300, 125);
	drawBuilding(50, 150, 200);
	drawBuilding(100, 350, 275);

	// Add some more buildings!
}


function drawBuilding(width, height, xPosition){
	var rect = new Rectangle(width,height);
	rect.setPosition(xPosition-(width/2), getHeight()-height);
	rect.setColor(Color.black);
	add(rect);
	if (height>LIGHT_REQUIRED_HEIGHT){
	    var pole = new Rectangle(POLE_WIDTH,(height/6));
	    pole.setPosition(xPosition, getHeight()-height-(height/6));
	    add(pole);
	    
	    var ball = new Circle(LIGHT_RADIUS);
	    ball.setPosition(xPosition, getHeight()-height-(height/6));
	    ball.setColor(Color.green);
	    add(ball);
	}
}