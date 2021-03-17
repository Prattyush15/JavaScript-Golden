/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
    var miles = readInt("How many miles did you run? ");
    var min = readInt("How many minutes did it take you? ");
    var hours = min / 60;
    var mph = miles/hours;
	println("Speed in mph: " + mph);
}