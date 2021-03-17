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
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}