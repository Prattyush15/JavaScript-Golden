var STARTING_SIZE = getWidth();
var MIN_SIZE = 5;
/*This code creates circles in squares till the starting size is
greater than the minimum*/
function start() {

    while(STARTING_SIZE>MIN_SIZE){
        //this code creates the squares
        var square = new Rectangle(STARTING_SIZE, STARTING_SIZE);
        square.setPosition((getWidth()/2)-(STARTING_SIZE/2), (getHeight()/2)-(STARTING_SIZE/2));
        //generates a random color for the squares
        square.setColor(Randomizer.nextColor());
        add(square);
        //this code creates the circle
        var circle = new Circle(STARTING_SIZE/2);
        circle.setPosition(getWidth()/2, getHeight()/2);
        //generates a random color for the circle
        circle.setColor(Randomizer.nextColor());
        add(circle);
        /*Change the starting size to be (radius/sqrt 2) * 2
        to create the illusion*/
        STARTING_SIZE = 2*((STARTING_SIZE/2)/Math.sqrt(2));    
            
        }
    
}