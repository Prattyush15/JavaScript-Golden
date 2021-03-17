var numShapes = 1;
var DELAY = 1000;
var RADIUS = 25;
var SIDE_LENGTH = 50;
var BUFFER=50;
var i;
var j;
var circle;
var rect;
var x1 = BUFFER;
var x2 = getWidth()-BUFFER;
var y1 = BUFFER;
var y2= getHeight()-BUFFER;

function start(){
    setTimer(addShapes, DELAY);
}

function addShapes(){
    /*this if statement checks whether the num shapes is even or odd,
    odd numbers make circles and even numbers make squares*/
    if(numShapes % 2 != 0){
        //for loop that creates circles depending on numShapes
        for(i = 0; i<numShapes; i++){
            circle = new Circle(RADIUS);
            circle.setPosition(Randomizer.nextInt(x1+RADIUS, x2-RADIUS), Randomizer.nextInt(y1+RADIUS, y2-RADIUS));
            //sets a random color
            circle.setColor(Randomizer.nextColor());
           add(circle);
        }
    }else{
        //if number is even, it will create squares that will
        //squares until numShapes
        for(j = 0; j<numShapes; j++){
            rect = new Rectangle(50,50);
            rect.setPosition(Randomizer.nextInt(x1, x2-50), Randomizer.nextInt(y1, y2-50));
            //creates a random color
            rect.setColor(Randomizer.nextColor());
            add(rect);
        }
    }
    //adds one to numShape to create the increasing number of shapes
    numShapes++;
}