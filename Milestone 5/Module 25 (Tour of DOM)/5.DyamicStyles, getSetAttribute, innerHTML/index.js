// styling through JS 
let header = document.querySelector("#header");
header.style.backgroundColor = "red";
header.style.color = "white";
header.style.fontSize = "96px"

/*
CSS                 |        JS 
----------------------------------------
background-color    |    backgroundColor
font-size           |   fontSize
*/

// set attribute
let secondH1 = document.querySelector("#game-list-header");
secondH1.setAttribute("title", "second header");

// get attribute
console.log(secondH1.getAttribute("title"));

// Inner text;
console.log(secondH1.innerText); // Favourite Games

//Inner Html
console.log(document.querySelector(".game-list").innerHTML);
/*
        <li>RDR2</li>
        <li>TW3</li>
        <li>GoT</li>
*/