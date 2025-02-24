let cashOutButton = document.querySelector("#cashOutButton");
cashOutButton.addEventListener("click", function() {
    let marchentNum = document.querySelector("#marchentCashOut").value;
    let cashOutPin = document.querySelector("#cashOutPin").value;
    let cashOutAmount = document.querySelector("#cashOutAmount").value;
    if(marchentNum.length === 11 && cashOutPin === "1234") {
        amount = parseFloat(cashOutAmount);
        let cashOuntWallet = document.querySelector("#wallet-value");
        cashOuntWallet.innerText = (parseFloat(cashOuntWallet.innerText) - amount).toFixed(2);
        alert(`New wallet amount is ${cashOuntWallet.innerText}`)
    }
})