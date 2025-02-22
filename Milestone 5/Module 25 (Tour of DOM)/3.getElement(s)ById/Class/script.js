// by Class
let general = document.getElementsByClassName("hello-world");
console.log(general);

for(h1 of general) {
    console.log(h1);
}

// By Id
let special = document.getElementById("special-hello");
console.log(special, "this is special");