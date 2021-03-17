var BALL_RADIUS = 30;
var line;
var ball;
function start() {
    mouseMoveMethod(dab);

}

function dab(e){
    remove(line);
    remove(ball);
    line = new Line(getWidth()/2,getHeight()/2, e.getX(), e.getY());
    add(line);
    
    ball = new Circle(BALL_RADIUS);
    ball.setColor(Color.yellow);
    ball.setPosition(e.getX(), e.getY());
    add(ball);
    
    
    
}