const button = document.querySelector("#addMoneyButton");
button.addEventListener("click", function() {
    let bank = document.querySelector("#bank").value;
    let pin = document.querySelector("#pin").value;

    if (pin === "1234" && bank !== "notSelected") {
        let amount = document.querySelector("#Amount").value;
        amount = parseFloat(amount);
        let wallet = document.querySelector("#wallet-value"); 
        wallet.innerText = (parseFloat(wallet.innerText) + amount).toFixed(2);
        alert(`New wallet amount is ${wallet.innerText}`)  
    } else {
        alert("Select Correct Pin and Bank Account")
    }
});