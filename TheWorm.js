var NUM_CIRCLES = 15;
var WIDTH = getWidth()/(NUM_CIRCLES*2);
// This graphics program should draw a worm. 
// A worm is made up of NUM_CIRCLES circles. 
// Use a for loop to draw the worm, 
// centered vertically in the screen. 
// Also, be sure that the worm is still drawn across 
// the whole canvas, even if the value of NUM_CIRCLES is changed.
function start(){

for(var NUM_CIRCLES = 0; NUM_CIRCLES < 15; NUM_CIRCLES++){
    var circle = new Circle(WIDTH);
    circle.setPosition(0+WIDTH+(WIDTH*2*NUM_CIRCLES),getHeight()/2);
    circle.setColor(Color.black);
    add(circle);
}
}