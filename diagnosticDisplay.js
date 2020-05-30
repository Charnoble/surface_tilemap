"use strict";

//diagnostic display

let db = document.body;
let dd = document.getElementById('diagnostics');


/*db.addEventListener('keydown', (e)=> {
    let s = dd.innerHTML;
    console.log("this is the inner html: ", s);
    if (s.length > 100) {
        let index = s.indexOf('<br>') + 4;
        dd.innerHTML = s.slice(index) + e.key + " press " + "<br>";
    } else {
        let index = 0;
        dd.innerHTML = s + e.key + " press " + "<br>";
    }  
});*/

function dlog(text) {
    let dd = document.getElementById('diagnostics');
    let s = dd.innerHTML;
    if (s.length > 100) {
        let index = s.indexOf('<br>') + 4;
        dd.innerHTML = s.slice(index) + text + "<br>";
    } else {
        let index = 0;
        dd.innerHTML = s + text + "<br>";
    } 
}