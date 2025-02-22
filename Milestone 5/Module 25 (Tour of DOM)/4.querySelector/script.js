// tag
let para = document.querySelector("p");
console.log(para);

// id
let special = document.querySelector("#special-hello");
console.log(special);

// className
let general = document.querySelector(".hello-world");
console.log(general.innerText); // OOPS where is others??

let generalList = document.querySelectorAll(".hello-world");
console.log(generalList);

for (text of generalList) {
    console.log(text.innerText);
}

// getting the langList 
let langList = document.querySelectorAll("#Lang-List li");
console.log(langList);