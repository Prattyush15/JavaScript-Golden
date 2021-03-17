/*This function takes the users number and creates a hailstone 
sequence
*/

function start(){
    //asks for user input
	var n = readInt("Enter Number ");
	println(n);
	var i = 0;
	while(true){
	    //checks if n = 1
	    if (n==1){
	        println("It took " + i + " steps to complete.");
	        break;
	    }
	    //divides n by 2 when n is even
	    if (isEven(n)){
	        n = n/2;
	        println(n);
	    }else{
	        //multiplies n by 3 and adds 1 when odd
	        n = (n*3) + 1;
	        println(n);
	        
	        
	    }
	    //checks how many steps it took to complete
	    i = i + 1;
	}
	    
	  
}
//Checks if the number is even
function isEven(x){
    return(x % 2 ==0);
}