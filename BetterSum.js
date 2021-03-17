function start(){
	var start = readInt("What is your starting number? ");
	var end = readInt("What is your ending number? ");
	var sum = 0;
	for(var i=start; i<=end; i++){
	  sum+=i;
	} 
	println("Your sum is: " + sum);
}