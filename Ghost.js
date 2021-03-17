// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.red;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.white;
var PUPIL_COLOR = Color.blue;

/* This program draws a ghost on the canvas. */
function start(){
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(getWidth()/2, getHeight()/2);
    head.setColor(BODY_COLOR);
    add(head);
    
    var body = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    body.setPosition((getWidth()/2)-HEAD_RADIUS,getHeight()/2);
    body.setColor(BODY_COLOR);
    add(body);
    
    for (var i = 0; i<NUM_FEET; i++){
        var feet = new Circle(FOOT_RADIUS);
        feet.setPosition((((getWidth()/2)-HEAD_RADIUS) + FOOT_RADIUS)+(i*(HEAD_RADIUS - FOOT_RADIUS)), ((getHeight()/2)+BODY_HEIGHT));
        feet.setColor(BODY_COLOR);
        add(feet);
        
    }
    
    var leftEye = new Circle(EYE_RADIUS);
    leftEye.setPosition((getWidth()/2)-EYE_OFFSET,(getHeight()/2));
    leftEye.setColor(EYE_COLOR);
    add(leftEye);
    
    var rightEye = new Circle(EYE_RADIUS);
    rightEye.setPosition((getWidth()/2)+EYE_OFFSET,(getHeight()/2));
    rightEye.setColor(EYE_COLOR);
    add(rightEye);
    
    var leftPupil = new Circle(PUPIL_RADIUS);
    leftPupil.setPosition((getWidth()/2)-PUPIL_LEFT_OFFSET,(getHeight()/2));
    leftPupil.setColor(PUPIL_COLOR);
    add(leftPupil);
    
    var rightPupil = new Circle(PUPIL_RADIUS);
    rightPupil.setPosition((getWidth()/2)+PUPIL_RIGHT_OFFSET,(getHeight()/2));
    rightPupil.setColor(PUPIL_COLOR);
    add(rightPupil);
    


    
    
}