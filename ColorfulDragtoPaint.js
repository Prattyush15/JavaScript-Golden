function start(){
	mouseDragMethod(paint);
}

function paint(e){
	var circle = new Circle(15);
	circle.setColor(Randomizer.nextColor());
	circle.setPosition(e.getX(), e.getY());
	add(circle);
}