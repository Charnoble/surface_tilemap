"use strict";

//consider updating with watchPosition();

setTimeout(getLocation,1000);
setInterval(getLocation,10000);


function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        dlog("browser does not support geo position");
    }
}

function showPosition(position){
    let coords = position.coords;
    let timeStamp = position.timestamp;
    document.querySelector('#geolocation').innerHTML = 
        timeStamp + "<br>" + 
        "Lat: " + coords.latitude +
        "Long: " + coords.longitude + "<br>" +
        "Acc: " + coords.accuracy + "<br>" +
        "Alt: " + coords.altitude + "<br>" +
        "Alt Acc: " + coords.altitudeAccuracy + "<br>" +
        "Heading: " + coords.heading + "<br>" +
        "Speed: " + coords.speed + "<br>";
}

