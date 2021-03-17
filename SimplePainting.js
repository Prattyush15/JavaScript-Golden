function start(){
	mouseMoveMethod(paint);
}

function paint(e){
	var circle = new Circle(15);
	circle.setPosition(e.getX(), e.getY());
	add(circle);
}