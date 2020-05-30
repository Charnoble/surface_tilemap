"use strict";


document.getElementsByTagName("h1").onclick = toggleBlog;

function toggleBlog(){
    let d = document.getElementById("blog").style.display;
    console.log(d);
    if (d == 'none') {
        d = 'visible';
    } else if (d == 'visible') {
        d = 'none';
    }
}