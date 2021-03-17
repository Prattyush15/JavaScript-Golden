function start(){
	move();
	buildTower();
	turnRight();
	move();
	turnRight();
	move();
	move();
	turnLeft();
	move();
	buildTower();
	move();
	turnRight();
}

function buildTower(){
    //This function builds the tower
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}

function turnRight(){
    //This function makes Karel turn right
    turnLeft();
    turnLeft();
    turnLeft();
}