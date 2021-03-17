function start(){
    var age = readInt("How old is you? ");
    if(age>=13){
        if(age<=19){
            println("Yes you are a teenager.");
        }else{
            println("No, you are not a teenager.");
        }
    }
    if(age<13){
        println("No, you are not a teenager.");
    }
}