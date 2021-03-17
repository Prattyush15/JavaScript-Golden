/*precondition: karel must be facing east
postcondition: karel must have picked up all the balls and return
back to (1,1) facing south
*/

function start() {
	while(leftIsClear()){
	    cleanUpRow();
	    
	}
	finish();
	
}
//funciton cleans up the row
function cleanUpRow(){
    while(frontIsClear()){
        if (ballsPresent()){
            takeBall();
        }
        move();
    }
    lit();
}
//function moves karel back to column 1
function lit(){
    if (ballsPresent()){
        takeBall();
    }
    turnLeft();
    move();
    turnLeft();
    while (frontIsClear()){
        move();
    }
    turnAround();
        
}
//function completes the top row and moves Karel to (1,1) facing south
function finish(){
    if(ballsPresent()){
        takeBall();
    }
    while(frontIsClear()){
        move();
        if(ballsPresent()){
            takeBall();
        }
        
    }
}