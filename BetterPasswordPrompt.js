var SECRET = "abc123";

function start(){
	while(true){
	    
	    var guess = readLine("Enter password: ");
	    if(guess == SECRET){
	        break;
	    }else{
	        println("Sorry, that did not match. Please try again.");
	    }
	}
	println("You got it!");
}