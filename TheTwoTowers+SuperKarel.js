/* This program allows Karel to build two towers with the use of functions
*/

/*Precondition: Karel is facing east
Post condition: Karel should have built two towers and facing east
*/

function start(){
	move();
	buildTower();
    //first tower built
	move();
	turnRight();
	move();
	move();
	move();
	turnLeft();
	move();
	//moves to a position where the second tower can be built
	buildTower();
	//builds second tower
}

//function to build the tower
function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
}