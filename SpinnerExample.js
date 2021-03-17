/* Note:
 *      This sample exercise is not included in the videos. 
 *      It is included here to show another way that timers can be used. 
 */

// Constants
var LENGTH = 150;
var DELAY = 30;

var X_CENTER = getWidth()/2;
var Y_CENTER = getHeight()/2;

var line;
var time = 0;

/* This program rotates a line in a circle
 * around the center of the screen. It uses trigonometry, 
 * so if you aren't familiar with that, you can skip this 
 * example.
 */
function start() {
	// Create the line and add it.
	line = new Line(X_CENTER, Y_CENTER, X_CENTER, Y_CENTER);
	add(line);
	
	/* This sets a timer that calls the function
	 * rotateLine every DELAY milliseconds
	 */
	setTimer(rotateLine, DELAY);
}


/* This function adds to the time of the program
 * and uses the sin and cos of the time to calculate
 * where the endpoint of the line should be and it
 * sets the endpoint
 */
function rotateLine() {
	time += 0.1;
	
	var dx = LENGTH * Math.cos(time);
	var dy = LENGTH * Math.sin(time);
	
	line.setEndpoint(X_CENTER + dx, Y_CENTER - dy);
}