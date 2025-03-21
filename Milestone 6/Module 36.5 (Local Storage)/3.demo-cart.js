function addToCart() {
    let item = document.querySelector("#item");
    let priceNumber = document.querySelector("#price");
    let [itemName, price] = [item.value, priceNumber.value];
    [item.value, priceNumber.value] = ["", ""];

    let cart = localStorage.getItem("cart");
    if(!cart) {
        cart = {} 
    } else {
        cart = JSON.parse(cart);
    }

    cart[itemName] = price;

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}


function showCart() {
    let cart = localStorage.getItem("cart");
    let cartDiv = document.querySelector("ol");
    cartDiv.innerHTML = "";
    if(cart) {
        cart = JSON.parse(cart);
        for(items in cart) {
            let itemInCart = document.createElement("li");
            itemInCart.innerText = `${items} - $${cart[items]}`;
            cartDiv.appendChild(itemInCart);
        }
    }
}

function clearCart() {
    localStorage.clear();
    showCart();
}

showCart();