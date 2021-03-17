// This program draws a target that follows the mouse
var line1;
var line2;
var circle;
function start(){
    line1 = new Line(0,0,0,0);
    line2 = new Line(0,0,0,0);
	mouseMoveMethod(crosshair);
	mouseClickMethod(dot);
}

function crosshair(e){
    remove(line1);
    remove(line2);
    line1.setPosition(e.getX(),0);
    line1.setEndpoint(e.getX(),getHeight());
    line2.setPosition(0,e.getY());
    line2.setEndpoint(getWidth(),e.getY());
    add(line1);
    add(line2);
}

function dot(e){
    circle = new Circle(10);
    circle.setPosition(e.getX(), e.getY());
    circle.setColor(Color.red);
    add(circle);
    

}