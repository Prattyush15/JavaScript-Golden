var N = readInt("Enter a starting value for the factorial: ");
var factorial = 1;
function start(){
	for (var i = 1; i<=N; i++){
	    factorial = factorial * i;
	}
	println(N + " ! =" + factorial);
}