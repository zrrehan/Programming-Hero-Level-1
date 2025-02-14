/*
    Take an array of objects that has [{name: mobileName, price: mobilePrice}, {..}, {..}]
    and return the minimum name and price
*/

function getMinimum(mobilePrice) {
    let min = Infinity;
    for (items of mobilePrice) {
        if(items["Price"] < min) {
            min = items["Price"];
        }
    }
    return min;
}

console.log(getMinimum([
    {"Name": "Apple", "Price": 1500},
    { "Name": "Samsung", "Price": 500 },
    { "Name": "Huwawei", "Price": 150 },
    { "Name": "Oppo", "Price": 200 },
]))