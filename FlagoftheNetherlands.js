/* This program should draw the Netherlands flag. The
* top third of the canvas is red, the middle third
* is white, and the bottom third is blue. */

function start(){
var topRect = new Rectangle(getWidth(), getHeight()/3);
topRect.setColor(Color.red);
topRect.setPosition(0,0);
add(topRect);
var botmRect = new Rectangle(getWidth(), getHeight()/3);
botmRect.setColor(Color.blue);
botmRect.setPosition(0,getHeight() - getHeight()/3);
add(botmRect);



}