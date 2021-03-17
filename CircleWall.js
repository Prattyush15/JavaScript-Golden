// Constants
var RADIUS = 20;
var DELAY = 40;
var counter = 0;
var x = RADIUS;
var y = RADIUS;

function start(){
    setTimer(draw,DELAY);
}

function draw(){
    var circle = new Circle (RADIUS);
    circle.setPosition(x,y);
    
    if (counter % 2 == 0 ){
        circle.setColor(Color.red);
    }
    
    counter++;
    add(circle);
    x += 2*RADIUS;
    
    if (x > getWidth()){
        x = RADIUS;
        y += 2*RADIUS;
    }
    
    if (y>getHeight()){
        stopTimer(draw);
    }
}