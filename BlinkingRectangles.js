var NUM_RECTANGLES_ACROSS = 4;
var NUM_RECTANGLES_DOWN = 10;
var rect;
//creates length of the rectangle to make evenly spaced out rectangles
var RECT_LENGTH = getWidth()/NUM_RECTANGLES_ACROSS;
//creates width of the rectangle to make evenly spaced out rectangles
var RECT_WIDTH = getHeight()/NUM_RECTANGLES_DOWN;

function start() {
//whever you move your mouse, a rectangle will be created
mouseMoveMethod(draw_rect);	
}

function draw_rect(e){
    rect = new Rectangle(RECT_LENGTH, RECT_WIDTH);
    //creates an integer for x
    var x = Math.floor(e.getX()/RECT_LENGTH)*RECT_LENGTH;
    //creates an integer for y 
    var y = Math.floor(e.getY()/RECT_WIDTH)*RECT_WIDTH;
    //sets the position
    rect.setPosition(x,y);
    //makes the rectangle a random color
    rect.setColor(Randomizer.nextColor());
    add(rect);
}