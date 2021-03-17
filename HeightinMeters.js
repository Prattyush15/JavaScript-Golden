var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
	convertHeightToMeters(6,4);
}

function convertHeightToMeters(feet, inches){
    var convIn = inches * INCHES_TO_CM;
    var convCm = convIn * CM_TO_METERS;
    var convFt = feet * FEET_TO_INCHES;
    var convM = convFt * INCHES_TO_CM * CM_TO_METERS;
    var convYes = convM + convCm;
    println(convYes);
    
}