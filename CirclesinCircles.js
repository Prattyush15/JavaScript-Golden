var NUM_CIRCLES = 30;
var BIG_RADIUS = 180;
//This program creates evenly spaced circles in circles
function start() {
//loops until you have max number of circles
	for(var i = 0; i <= NUM_CIRCLES; i++){
        //creates the circles
	    var circle = new Circle (BIG_RADIUS);
	    circle.setPosition(getWidth()/2, getHeight()-BIG_RADIUS);
	    //by subtracting by 6, it creates evenly spaced circles 
	    BIG_RADIUS -= 6;
	    //creates random colors for your circle
	    var color = Randomizer.nextColor();
	    circle.setColor(color);
	    add(circle);
	    
	    
	    
	    
	    
	    
	    
	    
	    
	}
}