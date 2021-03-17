/* Constants */
var START_RADIUS = 1;
var INCREMENT = 1;
var CHANGE_COLORS_AT = 10;
var circle;

function start(){
	circle = new Circle (START_RADIUS);
	circle.setPosition(getWidth()/2, getHeight()/2);
	add(circle);
	setTimer(draw,50);

}

function draw(){
    var size = circle.getRadius();
    size = size + INCREMENT;
    circle.setRadius(size);
    if (size % 10 ==1){
        var color = Randomizer.nextColor();
        circle.setColor(color);
    }
    if (size == getHeight()/2){
        stopTimer(draw);
    }
    
}