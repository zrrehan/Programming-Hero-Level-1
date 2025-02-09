let string = "I am Batman";

// Way 1
let reverse1 = "" 
for(let i = 0; i < string.length; i++) {
    reverse1 = string[i] + reverse1;
}
console.log(reverse1);

// way 2;
let reverse2 = "";
for(let items of string) {
    reverse2 = items + reverse2;
}
console.log(reverse2);

// way 3
console.log(string.split("").reverse().join(""))