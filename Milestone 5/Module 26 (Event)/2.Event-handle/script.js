// Method 01
function makeGreen() {
    document.querySelector("body").style.backgroundColor = "green"
}


// Method 02 
function makePurple() {
    document.querySelector("body").style.backgroundColor = "purple";
}

let makePurpleBtn = document.querySelector(".make-purple");
makePurpleBtn.onclick = makePurple;

// Method 03
let makeBrown = document.querySelector(".make-brown");
makeBrown.onclick = function() {
    document.querySelector("body").style.backgroundColor = "brown";
}