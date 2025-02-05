// Example 1 

const age = 20;
if(age >= 18) {
    console.log("You can vote");
} else {
    console.log("Jaw babu ghumaw");
}

// -----------------------in ternary-----------------------
age >= 18 ? console.log("Vote dio"): console.log("Ghumay thako")

// Example 2
const isLeader = false;
let price;

if(isLeader == true) {
    price = 0;
} else {
    price = age + 500;
}

console.log(price)
// -----------------------in ternary-----------------------
price = isLeader == true ? 0: age + 500
console.log(price)

// Example 3 
price = 1000;
if(isLeader === true) {
    if(price > 800) {
        price = 300;
    } 
} else {
    price += 100;
}

console.log(price)

// -----------------------in ternary-----------------------
price = 1000;
price = isLeader === true ? price>800 ? 300:price: price + 100; 
console.log(price)