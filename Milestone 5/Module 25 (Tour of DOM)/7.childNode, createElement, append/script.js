let section = document.querySelector("section");
console.log(section.childNodes); // NodeList(5)[text, h1, text, p, text]

// firstChild
console.log(section.firstChild);


// createElemnt and append in section
let button = document.createElement("button");
button.innerText = "Click Me!";
section.append(button);

