var NUM_CIRCLES = 3;
var RADIUS = 30;

function start(){
drawCircles();
mouseDownMethod(drag);
mouseDragMethod(dragTwo);
mouseUpMethod(drop);

}

function drawCircles() {
for (var i = 0; i < NUM_CIRCLES; i++) {
var circle = new Circle(RADIUS);
var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
var y = Randomizer.nextInt(RADIUS, getHeight() - RADIUS);
circle.setPosition(x, y);
circle.setColor(Randomizer.nextColor());
add(circle);

}

}

var newPos = null;

function drag(e){
newPos = getElementAt(e.getX(), e.getY());

}

function drop(e){
newPos = null;
}

function dragTwo(e){
newPos.setPosition(e.getX(), e.getY());
}