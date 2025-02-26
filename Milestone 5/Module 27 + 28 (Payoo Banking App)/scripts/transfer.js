document.querySelector("#transferButton").addEventListener("click", function() {
    let transferAcc = inputValueByID("transferSend");
    let transferPIN = inputValueByID("transferPin");
    
    if (logicTransaction(transferAcc, transferPIN)) {
        if (changeMoney(inputValueByID("transferAmount"), "remove") == "no money") {
            return;
        }
        allTransaction.push(
            { transactionName: "Transfer Money", transactionValue: inputValueByID("transferAmount") }
        );
        alert("Money has been transferred");
    } else {
        alert("Wrong Pin or No Account Found");
    }
});