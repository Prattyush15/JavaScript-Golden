function start(){
	var num1 = readInt("First roll? ");
	var num2 = readInt("Second roll? ");
	var rolledDoubles = num1 == num2;
	println("Did you roll doubles: " + rolledDoubles);
}