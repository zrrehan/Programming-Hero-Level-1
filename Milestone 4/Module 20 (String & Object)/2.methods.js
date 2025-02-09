// toLowerCase and toUpperCase 
let string = "JavaScript is the HEART of Web";

console.log(string.toLowerCase());
console.log(string.toUpperCase());

// trim, trimEnd, trimStart
let food = "   water    ";
console.log(food.trim());
console.log(food.trimStart());
console.log(food.trimEnd());

// Split;
let greetings = "Hello World";
console.log(greetings.split(" "));

// Slice;
let fruits = "Mango";
console.log(fruits.slice(0,3));
console.log(fruits.slice(3));

// concating
console.log(fruits + greetings);
console.log(fruits.concat("oooooo"));

// replace
let truth = "it is truth that AI will replace programmer";
truth = truth.replace("truth", "false");
console.log(truth);