let input = document.querySelector("input");
let btn = document.querySelector("button");
let flag = false;
input.addEventListener("keyup", function() {
    console.log(input.value, input.value === "delete");
    if(input.value === "delete") {
        btn.removeAttribute("disabled");
        flag = true;
    } else if(flag) {
        btn.setAttribute("disabled", true);
        flag = false;
    }
});

btn.addEventListener("click", function() {
    let header = document.querySelector("h1");
    header.innerText = "Your account is deleted";
});