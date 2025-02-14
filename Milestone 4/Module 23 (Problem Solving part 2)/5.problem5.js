/*
    Take an array of objects that has [{name: mobileName, price: mobilePrice}, {..}, {..}]
    now calculate subtotal with discount 
    0-300 = 0% discount 
    301-700 = 30% discount 
    701 -  beyond = 50% discount 
*/

function getMinimum(mobilePrice) {
    let total = 0;
    for(let items of mobilePrice) {
        if(items["Price"] < 300) {
            total += items["Price"];
        } else if (items["Price"] < 700) {
            total += items["Price"] * 0.7;
        } else {
            total += items["Price"] * 0.5;
        }
    }
    return total
}

console.log(getMinimum([
    { "Name": "Apple", "Price": 1500 },
    { "Name": "Samsung", "Price": 500 },
    { "Name": "Huwawei", "Price": 150 },
    { "Name": "Oppo", "Price": 200 },
]))