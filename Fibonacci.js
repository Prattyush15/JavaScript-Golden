var MAX = 1000;

function start(){
    var i = 1;
    var j = 1;
    println(i);
    println(j);
	while (i + j < MAX){
	    i = i + j;
	    j = i + j; 
	    println(i);
	    println(j);
	    
	    
	    
	}
}