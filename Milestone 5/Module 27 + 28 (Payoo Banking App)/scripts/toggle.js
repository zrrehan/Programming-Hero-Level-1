const services = ["add-money", "cash-out", "transfer-money", "get-bonus", "pay-bill", "transaction"];
document.querySelector("#add-money").style.border = "2px solid #0874F2";

for(let i = 1; i < services.length; i++) {
    document.querySelector(`#${services[i]}-section`).style.display = "none";
}

for(let serv of services) {
    let serviceButton = document.querySelector(`#${serv}`);
    serviceButton.addEventListener("click", function() {
        for(let i of services) {
            if(i === serviceButton.id) {
                document.querySelector(`#${i}`).style.border = "2px solid #0874F2";
                document.querySelector(`#${i}-section`).style.display = "flex"; 
            } else {
                document.querySelector(`#${i}`).style.border = "2px solid black";
                document.querySelector(`#${i}-section`).style.display = "none"; 
            }
        }
    });
}