/* This program will add up numbers from 
 * the user until they enter the sentinel
 * value, and at the end will print the
 * total sum. 
 */
var SENTINEL = -1;

function start(){
	var sum = 0;
	
	while(true){
		var num = readInt("Enter a number: ");
		if(num == SENTINEL){
			break;
		}
		sum += num;
	}
	
	println("The total was: " + sum);
}