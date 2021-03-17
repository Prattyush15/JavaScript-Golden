// This program adds the numbers from 1
// to 100.
var MIN = 1;
var MAX = 100;

function start(){
	var sum = 0;
	for(var i = MIN; i <= MAX; i++){
		sum += i;
	}
	
	println("The sum was " + sum);
}