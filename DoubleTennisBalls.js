/*precondition: Karel must be facing East at (1,1)
postcondition: Karel must be facing East at (1,1) with the amount
of balls doubled
*/

function start(){
    move();
    putTwoBalls();
    moveBack();
}
/*for everyball in the original stack, karel will put 
two in the spot next to it
*/

function putTwoBalls(){
    while(ballsPresent()){
        takeBall();
        putTwoMoreBalls();
    }
    moveBallsBack();
}

function putTwoMoreBalls(){
    move();
    putBall();
    putBall();
    moveBack();
}

function moveBallsBack(){
    move();
    while(ballsPresent()){
        moveOneBallBack();
    }
    moveBack();
}

function moveOneBallBack(){
    takeBall();
    moveBack();
    putBall();
    move();
}

function moveBack(){
    turnAround();
    move();
    turnAround();
    
}