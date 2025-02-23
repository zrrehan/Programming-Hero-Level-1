function changeName() {
    let name = document.querySelector("input");
    if(name.value !== "") {
        let header = document.querySelector("h1");
        header.innerText = `Your Name is ${name.value}`;
    } else {
        name.placeholder = "Enter Valid Name";
    }
}

let button = document.querySelector("button");
button.addEventListener("click", changeName);