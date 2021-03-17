var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

function drawCircle(radius, color, x, y){
    var circle = new Circle (radius);
    circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}



function start(){
	var rect = new Rectangle(120,350);
	rect.setPosition((getWidth()/2) - (STOPLIGHT_WIDTH/2), (getHeight()/2)-(STOPLIGHT_HEIGHT/2));
	rect.setColor(GRAY_COLOR);
	add(rect);
	drawCircle(LIGHT_RADIUS, Color.red, (getWidth()/2), (getHeight()/2)-DIST_BETWEEN_LIGHTS);
	drawCircle(LIGHT_RADIUS, Color.yellow, (getWidth()/2), (getHeight()/2));
	drawCircle(LIGHT_RADIUS, Color.green, (getWidth()/2), (getHeight()/2)+DIST_BETWEEN_LIGHTS);
}