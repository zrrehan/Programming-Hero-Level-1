/*
    Take an array of objects that has [{name: mobileName, price: mobilePrice}, {..}, {..}]
    and return the total price
*/

function getMinimum(mobilePrice) {
    let total = 0;
    for(let items of mobilePrice) {
        total = total + items["Price"];
    }
    return total;
}

console.log(getMinimum([
    { "Name": "Apple", "Price": 1500 },
    { "Name": "Samsung", "Price": 500 },
    { "Name": "Huwawei", "Price": 150 },
    { "Name": "Oppo", "Price": 200 },
]))