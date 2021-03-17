/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    //this will move around and place balls
    for (var i = 0; i < 4; i++){
        while (frontIsClear()){
            move();
        }
        placeBalls();
        turnLeft();
    }
}
//this will place the balls 8 times
function placeBalls(){
    putBall();
    putBall();
    putBall();
    putBall();
    putBall();
    putBall();
    putBall();
    putBall();
}

function notNeccesary(){
    turnRight();
}