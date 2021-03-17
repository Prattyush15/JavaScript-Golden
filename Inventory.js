var STARTING_ITEMS_IN_INVENTORY = 20;

function start(){
	var numItems = STARTING_ITEMS_IN_INVENTORY;	
    while (numItems>0){
        println("We have " +numItems+ " items in inventory. ");
        var buy = readInt("How many would you like to buy? ");
        if(buy > numItems){
            println("There is not enough in inventory for you. ");
        }else{
            numItems-=buy;
            println("Now we have "+ numItems + "left. ");
        }
        println(" ");
    }
    println("All Out!");
}