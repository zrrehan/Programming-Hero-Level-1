document.querySelector("#getBonusButton").addEventListener("click", function() {
    if (inputValueByID("Bonus-Cupon") === "Payoo11") {
        changeMoney(100, "add");
    } else {
        alert("Coupon is Invalid or expired");
    }
});