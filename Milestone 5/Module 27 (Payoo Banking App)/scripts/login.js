let button = document.querySelector("#login-btn");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let phnNumber = document.querySelector("#phn-num");
    let pin = document.querySelector("#pin");
    if(phnNumber.value.length == 11 && pin.value === "1234") {
        window.location.href = "main.html";
    } else {
        alert("PIN or Mobile Number is wrong!!")
    }
});