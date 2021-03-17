var CAKE_LENGTH = 150;
var CAKE_WIDTH = getWidth();
var CIRCLE = 20;
var X = getWidth()/2;
var Y = getHeight()/2;
/*This function creates a cake and puts candles depending on your age*/
function start(){
//This creates the base of the cake   
    var cake = new Rectangle(CAKE_WIDTH, CAKE_LENGTH);
    cake.setColor(Color.ORANGE);
    cake.setPosition((getWidth()/2) - (CAKE_WIDTH/2), (getHeight()/2) - (CIRCLE));
    add(cake);
//This creates the words on the cake
    var text = new Text ("HAPPY BIRTHDAY", "22pt Arial");
    text.setPosition((getWidth()/2 - CAKE_WIDTH/2) +(CAKE_LENGTH/2), (getHeight()/2) + 70);
    text.setColor(Color.WHITE);
    add(text);
//This creates the icing on the top and bottom of the cake
    for(var i=0; i < 11; i++){
        var circle = new Circle(CIRCLE);
        circle.setPosition((getWidth()/2) - (CAKE_WIDTH/2) , (getHeight()/2) - CIRCLE);
        circle.setColor(Color.BLACK);
        add(circle);
        var circle2 = new Circle(CIRCLE);
        circle2.setPosition((getWidth()/2) - (CAKE_WIDTH/2), (getHeight()/2) + CAKE_LENGTH - CIRCLE);
        circle2.setColor(Color.BLACK);
        add(circle2);
        CAKE_WIDTH = CAKE_WIDTH - 80;
    }
//This code creates candles depending on how old you are turning
    var age = readInt("How old are you turning? ");
        for (var j = 0; j < age; j++){
            var candles = new Rectangle(10,100);
            candles.setColor(Color.BLACK);
            if (j%2 == 0){
                candles.setPosition(X - 5 + j/2*CIRCLE*2, Y-CAKE_LENGTH/2-40);
            }else{
                candles.setPosition(X- 5 - j/2*CIRCLE*2-CIRCLE, Y - CAKE_LENGTH/2-40);
            }
            add(candles);
        }
}