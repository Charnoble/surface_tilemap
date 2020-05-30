"use strict";


//perspective angle control (x-axis)


let cac = document.body;


let xTilt = 0;
let minTiltX = 0;
let maxTiltX = 115;

let zTilt = 0;
let minTiltZ = 0;
let maxTiltZ = 360;




cac.addEventListener('keydown', (e)=> {
    //alert('hi');
    console.log("you pressed " + e.key);
    if (e.key == "ArrowDown" || e.key == "s") {
        xTilt <= minTiltX ? null: xTilt -= 1;
        let template = `rotateX(${xTilt}deg) rotateZ(${zTilt}deg)`;
        dlog(template);
        document.getElementById('canvas').style.transform = template;
    } else if (e.key == "ArrowUp" || e.key == "w") {
        xTilt >= maxTiltX ? null: xTilt += 1;
        let template = `rotateX(${xTilt}deg) rotateZ(${zTilt}deg)`;
        dlog(template);
        document.getElementById('canvas').style.transform = template;
    } else if (e.key == "ArrowLeft" || e.key == "a") {
        zTilt = (zTilt % 360) - 0.5;
        let template = `rotateX(${xTilt}deg) rotateZ(${zTilt}deg)`;
        dlog(template);
        document.getElementById('canvas').style.transform = template;
    } else if (e.key == "ArrowRight" || e.key == "d") {
        zTilt = (zTilt % 360) + 0.5;
        let template = `rotateX(${xTilt}deg) rotateZ(${zTilt}deg)`;
        dlog(template);
        document.getElementById('canvas').style.transform = template;
    }

});


