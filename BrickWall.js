// Constants
var WIDTH = 50;
var HEIGHT = 20;
var xPos = 0; 
var yPos = getHeight() - HEIGHT;

function start() {
    setTimer(draw, 50);
}

function draw(){
    var brick = new Rectangle(50, 20);
    brick.setColor(Color.randomRed());
    brick.setPosition(xPos, yPos);
    add(brick);
    xPos += WIDTH;
    
    if(xPos > getWidth()){
        xPos = 1;
        yPos -= HEIGHT;
    }
    
    if(yPos > getHeight()){
        stopTimer(draw);
    }
}