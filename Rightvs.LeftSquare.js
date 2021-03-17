function start() {
    if (facingEast()){
        makeLeftSquare();
    }else{
        makeRightSquare();
    }
    
}

function makeLeftSquare(){
    putBall();
    move();
    putBall();
    turnLeft();
    move();
    putBall();
    turnLeft();
    move();
    putBall();
    turnLeft();
    move();
    turnLeft();

}

function makeRightSquare(){
    putBall();
    move();
    putBall();
    turnRight();
    move();
    putBall();
    turnRight();
    move();
    putBall();
    turnRight();
    move();
    turnRight();
}