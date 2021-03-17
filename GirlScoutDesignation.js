function start(){
	var numBoxes = readInt("How many boxes have you sold? ");
	var numBadges = readInt("How many badges do you have? ");
	var numOfHours = readInt("How many hours have you volunteered for? ");
	var goldStatus = numBoxes>=100 || numBoxes>=50 && numBadges>=10 && numOfHours>=25;
	println("Do you have gold status? " + goldStatus);
}