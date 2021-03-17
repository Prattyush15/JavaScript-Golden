function verticalLine(x,y){
    var line = new Line (x,0,x,y);
    add(line);
}
function start() {
    verticalLine(100,200);
}