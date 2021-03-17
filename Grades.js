//this is the special case variable
var PERFECT = "A+";
function start(){
//checks the letter grades for each score
    letterGrade(100);
    letterGrade(83);
    letterGrade(68);
    letterGrade(91);
    letterGrade(47);
    letterGrade(79);
    letterGrade(43);
    letterGrade(62);
    letterGrade(65);
    letterGrade(72);
    letterGrade(74);
    letterGrade(81);
    letterGrade(88);
    letterGrade(95);
    letterGrade(99);
}


function letterGrade(score){
    var letter;
    /*checks if the score is less than or equal to 59, this is the F
    range
    */
    if (score<=59){
    //if score is less than or equal to 59 then it prints F
        letter= "F";
    /*checks if the score is greater than or equal to 60 and less
    than or equal to 69, this is the D grade range
    */
    }else if(score>=60 && score<=69){
    //if true, then it will print D
        letter="D";
    /*checkts if the score is greater than or equal to 70 and less
    than or equal to 79, this is the C grade range
    */
    }else if(score>=70 && score<=79){
    //if true, then it will print C
        letter="C";
    /*checkts if the score is greater than or equal to 80 and less
    than or equal to 89, this is the B grade range
    */
    }else if(score>=80 && score<=89){
    //if true, then it will print B
        letter="B";
    /*checkts if the score is greater than or equal to 90 and less
    than or equal to 99, this is the A grade range
    */
    }else if(score>=90 && score<=99){
    //if true, then it will print A
        letter="A";
    }else{
    /*if it does not fall within any of these numbers, then that means
    the score was 100 and thus we use the variable PERFECT for the A+
    */
        letter = PERFECT;
    }
    /*This function checks if the number has a + or - after the letter
    grade. 
    */
    if (letter!="F" && score!=100){
    /*If the score divides by 10 and is greater than or equal to 7,
    that means the grade is in the + range so a + sign is added right
    after the letter
    */
        if(score %10>=7){
            letter = letter + "+";
    /*If the score divides by 10 and is less than or equal to 2,
    that means the grade is in the - range so a - sign is added right
    after the letter
    */
        }else if (score %10 <=2){
            letter=letter+"-";
        }
    }
    //prints the letter
    println(letter);
    
    
    
    
    
}