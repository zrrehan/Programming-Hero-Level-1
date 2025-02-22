let header = document.querySelector("h1");
let classListHeader = header.classList;
console.log(classListHeader);

// adding .green-text
classListHeader.add("green-text");
console.log(classListHeader);

// adding .yellow-bg
classListHeader.add("yellow-bg");
console.log(classListHeader);

// removing .green-text
classListHeader.remove("green-text");
console.log(classListHeader);