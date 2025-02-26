document.querySelector("#transferButton").addEventListener("click", function() {
    let transferAcc = inputValueByID("transferSend");
    let transferPIN = inputValueByID("transferPin");
    
    if (logicTransaction(transferAcc, transferPIN)) {
        changeMoney(inputValueByID("transferAmount"), "remove");
    } else {
        alert("Wrong Pin or No Account Found")
    }
});