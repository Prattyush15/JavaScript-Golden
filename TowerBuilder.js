/*precondition: karel must be facing East
postcondition: karel must stack the towers skiping every other spot
and must end facing East
*/
/*This program makes karel stack towers skipping ever other
column
*/

function start() {
    goUp();
}
/*function for making the tower go up and down checking to see where
you should move
*/
function goUp(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
    if (frontIsClear()){
        move();
    }
    if (frontIsClear()){
        move();
        goUp();
    }
}

function goDown(){
    while(frontIsClear()){
        move();
    }
}