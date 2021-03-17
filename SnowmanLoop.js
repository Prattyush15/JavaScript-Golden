var BOTTOM_RADIUS = 100;
var RATE_OF_DECAY = 0.58;
var MINIMUM_RADIUS = 1;
var x = getWidth()/2;
var y = getHeight();

function start() {
    //while loop that will create circles until the smallest
    //circle's radius is MINIMUM_RADIUS or 1
    while(BOTTOM_RADIUS>= MINIMUM_RADIUS){
        //creates the circle with the constant BOTTOM_RADIUS
        var circle = new Circle (BOTTOM_RADIUS);
        //set the circle's position with the constant x and y
        //subtracts BOTTOM_RADIUS from y to make the bottom circle
        //stand on top of the bottom of the box
        circle.setPosition(x, y-BOTTOM_RADIUS);
        //manipulate the y variable so that next time the loop
        //goes through, you will be able to have the illusion of
        //circles stacking on top of each other
        y = y - 2*BOTTOM_RADIUS;
        //manipulate the BOTTOM_RADIUS inorder to create
        //smaller circles
        BOTTOM_RADIUS = BOTTOM_RADIUS*RATE_OF_DECAY;
        //sets the color to grey
        circle.setColor(Color.grey);
        //adds circles
        add(circle);
        
    }

}