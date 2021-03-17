var NUM_CIRCLES = 15;
var WIDTH = getWidth()/(NUM_CIRCLES*2);
// This graphics program should draw a caterpillar. A caterpillar has NUM_CIRCLES
// circles. Every other circle is a different color, the even circles are red, and
// the odd circles are green. Use a for loop to draw the caterpillar, centered 
// vertically in the screen.
function start(){
    for(var i = 0; i < NUM_CIRCLES; i++){
        var circle = new Circle(WIDTH);
        circle.setPosition(0+WIDTH+(WIDTH*2*i),getHeight()/2);
        add(circle);
            if(i % 2 ==0){
                circle.setColor(Color.red);
            }else{
                circle.setColor(Color.green);
            }
    }
}