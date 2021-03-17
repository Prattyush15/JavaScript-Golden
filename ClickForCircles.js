/* This program draws a circle wherever the user
 * clicks. */
function start(){
	mouseClickMethod(drawCircle);
}

function drawCircle(e){
	var circle = new Circle(20);
	circle.setPosition(e.getX(), e.getY());
	add(circle);
}