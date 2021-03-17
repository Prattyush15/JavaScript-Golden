var PAN_RADIUS = getWidth()/3;
var HANDLE_WIDTH = getWidth()/2;
var HANDLE_HEIGHT = HANDLE_WIDTH/4;
var PAN_COLOR = Color.GRAY;

var PAN_BOTTOM_RADIUS = PAN_RADIUS-20;
var PAN_BOTTOM_COLOR = Color.BLACK;

var EGG_RADIUS = PAN_BOTTOM_RADIUS/4;
var EGG_WHITE_COLOR = Color.WHITE;
var EGG_YOL_COLOR = Color.YELLOW; 

var HIGHLIGHT_RADIUS = EGG_RADIUS/4;
var HIGHLIGHT_COLOR = Color.WHITE;


function start() {
    var handle = new Rectangle(HANDLE_WIDTH, HANDLE_HEIGHT);
    handle.setColor(PAN_COLOR);
    handle.setPosition((getWidth()/2),(getHeight()/2)-(HANDLE_HEIGHT/2));
    add(handle);
    
    var pan = new Circle(PAN_RADIUS);
    pan.setColor(PAN_COLOR);
    pan.setPosition(getWidth()/2,getHeight()/2);
    add(pan);
    
    var bottomPan = new Circle(PAN_BOTTOM_RADIUS);
    bottomPan.setColor(PAN_BOTTOM_COLOR);
    bottomPan.setPosition(getWidth()/2, getHeight()/2);
    add(bottomPan);
    
    var eggWhite1 = new Circle(EGG_RADIUS*2);
    eggWhite1.setPosition(getWidth()/2,getHeight()/2);
    eggWhite1.setColor(Color.white);
    add(eggWhite1);
    
    var yolk = new Circle(EGG_RADIUS);
    yolk.setColor(Color.yellow);
    yolk.setPosition(getWidth()/2, getHeight()/2);
    add(yolk);
    
    var yolkdot = new Circle(HIGHLIGHT_RADIUS);
    yolkdot.setPosition(getWidth()/2 + 10, (getHeight()/2)-10);
    yolkdot.setColor(Color.white);
    add(yolkdot);
    
    
}