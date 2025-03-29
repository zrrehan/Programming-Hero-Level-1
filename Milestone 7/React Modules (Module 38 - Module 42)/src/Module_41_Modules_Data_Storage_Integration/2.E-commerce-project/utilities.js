function add(itemId, itemName, itemPrice, itemImg, setCart) {
    let cart = getCart();
    if(Object.hasOwn(cart, itemId)) {
        cart[itemId]["quantity"] += 1
    } else {
        cart[itemId] = {
            name: itemName, price: itemPrice, quantity: 1, img: itemImg
        }
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Added To Cart",
        showConfirmButton: false,
        timer: 1000
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart)
}

function getCart() {
    let cart = localStorage.getItem("cart");
    if (cart === null) {
        cart = {}
    } else {
        cart = JSON.parse(cart);
    }
    return cart;
}

function manageCartItem(id, setCart) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            let cart = getCart();
            delete cart[id];
            localStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart)
        }
    });
}

function buyAll(setCart) {
    localStorage.clear();
    Swal.fire("Track Your Order...");
    setCart({});
}

export {add, getCart, manageCartItem, buyAll};