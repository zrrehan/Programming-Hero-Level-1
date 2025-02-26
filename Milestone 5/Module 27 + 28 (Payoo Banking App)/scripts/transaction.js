let allTransaction = [];

document.querySelector("#transaction").addEventListener("click", function() {
    let transactionContainer = document.querySelector("#transaction-container");
    transactionContainer.innerHTML = "";

    for(let transaction of allTransaction) {
        transactionContainer.innerHTML = `
        <div class = "text-start bg-red-0 bg-[#f2f2f2] rounded-lg p-3 flex justify-between items-center shadow-lg">
            <div class = "flex justify-center items-center gap-3">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                <div>
                    <h2 class="font-bold text-2xl">${transaction.transactionName}</h2>
                    <p class="text-2xl"><span>${transaction.transactionValue}</span>৳</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
        ` + transactionContainer.innerHTML;
    }
});