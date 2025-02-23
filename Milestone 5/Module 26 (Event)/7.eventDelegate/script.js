// const items = document.querySelectorAll(".items");

// for(let item of items) {
//     item.addEventListener("click", function(event) {
//         console.log(event.target);
//         event.target.parentNode.removeChild(event.target);
//     });
// }

let ol = document.querySelector("ol");
ol.addEventListener("click", function(event) {
    console.log(event.target, 123);
    event.target.parentNode.removeChild(event.target);
    // event.target.parentNode.removeChild(event.target);
})

let button = document.querySelector("button");
button.addEventListener("click", function() {
    // Selecting the parent
    let ol = document.querySelector("ol");
    
    // Creating New li
    let li = document.createElement("li");
    li.innerText = "New Item added";
    ol.appendChild(li);
})