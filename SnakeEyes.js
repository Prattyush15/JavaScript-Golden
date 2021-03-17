var SENTINEL = 2;
var die1 = 0;
var die2 = 0;
var count = 0;
function start(){
	while (true){
	    var die1 = Randomizer.nextInt(1,6);
	    var die2 = Randomizer.nextInt(1,6);
	    println("Rolled: " + die1 + " " + die2);
	    count++;
	    if(die1 + die2 == SENTINEL){
	        break;
	    }
	}
	println("It took you " + count + " rolls to get snake eyes");
}