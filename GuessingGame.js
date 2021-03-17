/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 * If the user enters '-1', the game should exit.
 */
 var MIN = 0;
 var MAX = 100;
function start() {
    println("This program plays a guessing game. ");
    println("The computer is thinking of a value between 0 and 100. ");
    println("Type '-1' to exit the program. ");
    //generates a random number
    var num = Randomizer.nextInt(MIN, MAX);
    while (true){
    //asks for your guess
        var guess = readInt("What is your guess? ");
        //what happens if you guess correctly
        if (guess == num){
            var correct = println("Correct!");
            var end = println("Game has concluded. ");
            break;
        }
        //what happens if your guess is too high
        if (guess > num){
            var high = println("You guess was too high.");
        }
        //what happens if your guess is too low
        if (guess < num){
            var low = println("You guess was too low. ");
        }
        //if you want to end the game
        if (guess == -1){
            var end = println("Game has concluded. ");
            break;
        }
    }
}