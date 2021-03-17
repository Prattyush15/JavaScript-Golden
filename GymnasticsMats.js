function start() {
    var widthMat = readInt("What is the width of the mat in feet? ");
    var lengthMat = readInt("What is the length of the mat in feet? ");
    var areaMat = calculateArea(widthMat, lengthMat);
    println("The area of each mat is " + areaMat + " square feet.");
    var widthRoom = readInt("What is the width of the room in feet? ");
    var lengthRoom = readInt("What is the length of the room in feet? ");
    var areaRoom = calculateArea(widthRoom, lengthRoom);
    println("The area of the room is " + areaRoom + " square feet.");
    var matsTotal = areaRoom/areaMat;
    println("You will need " + matsTotal + " mats to cover the room.");

}
// This function should calculate the area of a rectangle using
// the parameters of width and length.
function calculateArea(width, length){
    var areaRect = width*length;
    return areaRect;
}