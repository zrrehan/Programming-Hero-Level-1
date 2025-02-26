document.querySelector("#payBillButton").addEventListener("click", function() {
    let billCategory = inputValueByID("bill-category");
    
    if (inputValueByID("billPin") === "1234" && billCategory !== "notSelected") {
        if(changeMoney(inputValueByID("billAmount"), "remove") == "no money"){
            return;
        }
        allTransaction.push(
            { transactionName: "Bill Pay", transactionValue: `${billCategory} - ${inputValueByID("billAmount")}` }
        );
        alert("Bill paid Successfully");
    } else {
        alert("Invalid Bill or Wrong Pin");
    }
});