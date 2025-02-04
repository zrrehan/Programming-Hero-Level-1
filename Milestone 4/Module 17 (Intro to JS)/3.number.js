var orangePrice = 20;
var chocolatePrice = 0.5;
var applePrice = "26"; // This is not an integer but a string

console.log(orangePrice);
console.log(typeof applePrice);

// Converting applePrice to int 
var applePriceInt = parseInt(applePrice);
console.log(applePriceInt, typeof applePriceInt) 

// parseInt and parseFloat 
var orangePrice = "36.7";
var orangePriceInt = parseInt(orangePrice);
var orangePriceFloat = parseFloat(orangePrice);
console.log(orangePriceInt, orangePriceFloat);