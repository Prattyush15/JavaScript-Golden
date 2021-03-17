/* Constants representing the radius of the top, middle,
* and bottom snowball. */

var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

function start(){
var bottom = new Circle(BOTTOM_RADIUS);
bottom.setPosition(getWidth()/2, getHeight() - BOTTOM_RADIUS);
bottom.setColor(Color.grey);
add(bottom);

var middle = new Circle(MID_RADIUS);
middle.setPosition(getWidth()/2, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS));
middle.setColor(Color.grey);
add(middle);

var top = new Circle(TOP_RADIUS);
top.setPosition(getWidth()/2, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS*2+TOP_RADIUS));
top.setColor(Color.grey);
add(top);

}