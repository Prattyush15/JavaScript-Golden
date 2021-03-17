function start(){
	setTimer(draw, 50);
}

function draw(){
	fireworks(Randomizer.nextInt(0, getWidth()),
			  Randomizer.nextInt(0, getHeight()));
}

function fireworks(x, y){
	var NUM_LINES = 30;
	var LENGTH = 100;
	
	var color = Randomizer.nextColor();
	
	for(var i = 0; i < NUM_LINES; i++){
		// Find the angle for the current line
		var angle = 2*Math.PI/NUM_LINES * i;
		
		// Use the angle to find out how far to move
		// in the x and y directions
		var dx = Math.cos(angle) * LENGTH;
		var dy = Math.sin(angle) * LENGTH;
		
		var line = new Line(x, y, x + dx, y + dy);
		line.setColor(color);
		add(line);
	}
}