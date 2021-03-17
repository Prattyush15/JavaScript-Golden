var SIDES_ON_DICE = 6;

function start() {
	for (var i= 1; i<=SIDES_ON_DICE; i++){
	    for (var j = 1; j <= SIDES_ON_DICE; j++){
	        println(i + ", " + j);
	    }
	}
}