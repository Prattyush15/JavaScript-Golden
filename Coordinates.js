/* This program displays the x and y
 * coordinates in a label on the screen
 * and updates when the mouse moves */
 
var coords;
function start(){
    mouseMoveMethod(coordinates);
    
	
}

function coordinates (e){
    remove(coords);
    coords = new Text("("+ e.getX() +","+ e.getY() +")");
    coords.setPosition(0, 0+coords.getHeight());    
    add(coords);
    
    
}