function start(){
    var circle;
    var count = 0;
    var radius = 200;
    while (radius > 0){
        circle = new Circle(radius);
        circle.setColor(Color.red);
        circle.setPosition(getWidth()/2, getHeight()/2);
        if (count % 2 == 0){
            circle.setColor(Color.red);
        }else{
            circle.setColor(Color.black);
        }
        add(circle);
        count++;
        radius -= 20;
        
    }
        
    
}