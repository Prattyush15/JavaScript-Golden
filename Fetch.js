/*preconditions: Karel must be at (1,1) and facing East
*/
/*postcondition: Karel must have taken the ball from (3,5) and then
go back to point (1,1) and deposit the ball and then face East again
*/
function start() {
    collectBall();
    turnLeft();
    turnLeft();
    move();
    move();
    turnLeft();
    moveFour();
    turnLeft();
    putBall();
}
//this function is made to collect the ball from point (1,1)
function collectBall(){
    turnLeft();
    moveFour();
    turnRight();
    move();
    move();
    takeBall();
}
//moving four times
function moveFour(){
    move();
    move();
    move();
    move();
}