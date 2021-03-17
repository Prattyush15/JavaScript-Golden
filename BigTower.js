/* This program draws a big tower from Karel's starting spot */
function start(){
    checkDirection();
	buildTower();
    putBall();
}

function checkDirection(){
    while(notFacingNorth()){
        turnLeft();
    }
}

function buildTower(){
    while(frontIsClear()){
        putBall();
        move();
    }
}