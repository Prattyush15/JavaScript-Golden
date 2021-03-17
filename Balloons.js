// This program draws some balloons

var MIN_RADIUS = 20;
var MAX_RADIUS = 40;
var NUM_BALLOONS = 25;

function start() {
    //this calls the funtion to create balloons
    makeBalloon(NUM_BALLOONS);
}

function makeBalloon(x){
    var numBalloons = x;
    for(var i = 0; i <= numBalloons; i ++){
        // the x1 and y1 are all the strings starting spot
        var x1 = getWidth()/2;
        var y1 = (getHeight()/3) * 2;
        //x2 and y2 are being randomized
        var x2 = Randomizer.nextInt(getWidth()-MAX_RADIUS, MAX_RADIUS);
        var y2 = Randomizer.nextInt((getHeight()/3), MAX_RADIUS);
        //creates the line
        var line = new Line(x1,y1,x2,y2);
        add(line);
        //creates random sizes for the balloons with a min and max radius
        var balloon = new Circle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS));
        //sets balloon position to be on the top of the line
        balloon.setPosition(x2,y2);
        //randomizes the color
        balloon.setColor(Randomizer.nextColor());
        add(balloon);
    }
    
}