function start(){
    var vegetarian = "Vegetarian";
    var lactose = "lactose intolerant";
    var restriction = readLine("Restriction: ");
    if(restriction == "vegetarian"){
        println("Vegetarian: Veggie burger");
    }
    if(restriction == "lactose intolerant"){
        println("Lactose Intolerant: No Cheese");
    }
    if (restriction == "none"){
        println("No restrictions: No alterations");
    }
}