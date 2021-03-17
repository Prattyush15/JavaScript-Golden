//This program creates a joystick with a button

var x1 = (getWidth()/2);
var y1 = (getHeight()/3);
var x2 = x1;
var y2 = (getHeight()/2);
var HEAD_RADIUS = 50;
var width = 120;
var height = 60;
var buttonSize = 20;


function start(){
    var line = new Line(x1,y1,x2,y2);
    line.setColor(Color.black);
    add(line);
    
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(getWidth()/2, (getHeight()/3) - HEAD_RADIUS); 
    add(head);
    
    var actHead = new Circle(HEAD_RADIUS-2);
    actHead.setPosition(getWidth()/2, (getHeight()/3) - HEAD_RADIUS); 
    actHead.setColor(Color.red);
    add(actHead);
    
    var button = new Circle(buttonSize);
    button.setPosition((getWidth()/2) - HEAD_RADIUS + 10, getHeight()/2 );
    button.setColor(Color.red);
    add(button);
    
    var rect = new Rectangle(width, height);
    rect.setPosition((getWidth()/2)-HEAD_RADIUS-10, getHeight()/2);
    rect.setColor(Color.black);   
    add(rect);
    
}