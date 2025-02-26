document.querySelector("#payBillButton").addEventListener("click", function() {
    let billCategory = inputValueByID("bill-category");
    
    if (inputValueByID("billPin") === "1234" && billCategory !== "notSelected") {
        changeMoney(inputValueByID("billAmount"), "remove");
    } else {
        alert("Invalid Bill or Wrong Pin");
    }
});