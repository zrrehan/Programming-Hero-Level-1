// this function will not be use in login.js and cashOut.js

function inputValueByID(id) {
    id = "#" + id;
    return document.querySelector(id).value
}

function logicTransaction(mobileNumber, pin) {
    return mobileNumber.length == 11 && pin === "1234"
}

function changeMoney(amount, action) {
    let wallet = document.querySelector("#wallet-value");
    let walletValue = parseFloat(wallet.innerText);
    if(action.toLowerCase() === "remove") {
        if (walletValue - amount < 0) {
            alert("Not Enough Money");
            return "no money";
        }
        walletValue = walletValue - amount;
    } else if(action.toLowerCase() === "add") {
        walletValue = walletValue + amount;
    } else {
        alert(`${action} Action is not valid`);
    }
    wallet.innerText = walletValue.toFixed(2);
}

function logOut() {
    window.location.href = "index.html";
}
