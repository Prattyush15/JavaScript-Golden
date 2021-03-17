//Declare a constant here to represent the cost of a tshirt
var COST_OF_SHIRT = 20;
function start(){
    var amount = readInt("How many t-shirts would you like to buy? ");
    var cost = amount * COST_OF_SHIRT;
    println("$" + cost);
}