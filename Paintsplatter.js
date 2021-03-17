 // Constants
 var CIRCLES_PER_SPLATTER = 20;
 var MIN_RADIUS = 5;
 var MAX_RADIUS = 25;
 var DELAY = 500;
 var paint;

/* This program creates a paint splatter.
 * It's art. */
function start(){
    setTimer(draw, DELAY);
}

function draw(){
    var color = Randomizer.nextColor();
    for(var i=0; i<CIRCLES_PER_SPLATTER; i++){
        paint = new Circle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS));
        paint.setColor(color);
        paint.setPosition(Randomizer.nextInt(0, getWidth()),Randomizer.nextInt(0, getHeight()));
        add(paint);
    }
}