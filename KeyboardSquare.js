var square;

function start(){
	square = new Rectangle(40, 40);
	square.setPosition(100, 100);
	add(square);
	
	keyDownMethod(keyDown);
}

function keyDown(e){
	if(e.keyCode == Keyboard.LEFT){
		square.move(-5, 0);
	}
	
	if(e.keyCode == Keyboard.RIGHT){
		square.move(5, 0);
	}
	
	if(e.keyCode == Keyboard.letter('K')){
		square.move(0, -5);
	}
	
	if(e.keyCode == Keyboard.letter('J')){
		square.move(0, 5);
	}
}