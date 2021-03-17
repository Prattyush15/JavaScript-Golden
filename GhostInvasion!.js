// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8; // This is how far left the pupil should be from the center of the ghost
var PUPIL_RIGHT_OFFSET = 20; // This is how far right the pupil should be from the center of the ghost
var EYE_RADIUS = 10;
var EYE_OFFSET = 14; // This is how far left or right the eye should be from the center of the ghost

/*This program creates ghosts based on the variables centerX, 
centerY, and color
*/
function start(){
    //creates the variables centerX and centerY
	var centerX = getWidth()/2;
	var centerY = getHeight()/2;
	//creats the ghosts using the drawGhost function
	drawGhost(centerX, centerY, Color.red);
	drawGhost(100,100, Color.green);
	drawGhost(300,200, Color.black);
	drawGhost(40,300, Color.orange);
	drawGhost(300,50,Color.yellow);
}

function drawGhost(centerX, centerY, color){
    /*This creates the head of the ghosts using the constant
    HEAD_RADIUS and then places them based on centerX and 
    centerY
    */
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(centerX, centerY);
    head.setColor(color);
    add(head);
    /*This creates the body of the ghosts using the constants
    BODY_WIDTH and BODY_HEIGHT and then sets the position depending
    on what centerX and centerY is
    */
    var body = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    body.setPosition(centerX-HEAD_RADIUS,centerY);
    body.setColor(color);
    add(body);
    /*This creates the feet of the ghosts by using the for loop
    to repeat this function depending on the number of feet on
    the ghosts. It then sets the position of the feet depending on
    centerX and centerY
    */
    for (var i = 0; i<NUM_FEET; i++){
        var feet = new Circle(FOOT_RADIUS);
        feet.setPosition((centerX-HEAD_RADIUS)+FOOT_RADIUS+(FOOT_RADIUS*i*2),centerY+BODY_HEIGHT);
        feet.setColor(color);
        add(feet);
        
    }
    //draws the eyes based off of centerX and centerY
    drawEye(centerX-EYE_OFFSET,centerY);
    drawEye(centerX+EYE_OFFSET, centerY);
    
    
    /*This creates the left and right pupil using the constant EYE_RADIUS
    and then centers the pupils in the eyers using the constant 
    PUPIL_LEFT_OFFSET adn PUPIL_RIGHT_OFFSET and based off where
    centerX and centerY are.
    */
    
    var leftPupil = new Circle(PUPIL_RADIUS);
    leftPupil.setPosition(centerX-PUPIL_LEFT_OFFSET,centerY);
    leftPupil.setColor(Color.blue);
    add(leftPupil);
    
    var rightPupil = new Circle(PUPIL_RADIUS);
    rightPupil.setPosition(centerX+PUPIL_RIGHT_OFFSET,centerY);
    rightPupil.setColor(Color.blue);
    add(rightPupil);
    

}


/*This creates the left and right eye using the constant EYE_RADIUS
and then I used x and y for the position and the positions in the
drawGhost function are based off of centerX and centerY
*/
function drawEye(x,y){
    var newEye = new Circle(EYE_RADIUS);
    newEye.setPosition(x,y);
    newEye.setColor(Color.white)
    add(newEye);
}