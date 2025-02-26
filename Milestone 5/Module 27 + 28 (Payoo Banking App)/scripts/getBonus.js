document.querySelector("#getBonusButton").addEventListener("click", function() {
    if (inputValueByID("Bonus-Cupon") === "Payoo11") {
        changeMoney(100, "add");
        allTransaction.push(
            { transactionName: "Get Bonus", transactionValue: 100 }
        );
        alert("Bonus Added");
    } else {
        alert("Coupon is Invalid or expired");
    }
});