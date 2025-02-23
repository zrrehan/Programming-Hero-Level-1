let button = document.querySelector("button");
button.addEventListener("click", function() {
    let input = document.querySelector("input");
    let comment = input.value;
    if(comment !== "") {
        let commentBox = document.querySelector(".comment-container");
        let commentHTML = `<div class = "comment">
            ${comment}
        </div>`;
        commentBox.innerHTML += commentHTML;
        input.value = "";
    }
});