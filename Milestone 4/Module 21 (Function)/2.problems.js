// Create a function that will take an array and return the sum of it 
function sumOfArray(array) {
    let sum = 0;
    for(let items of array) {
        sum = sum + items;
    }
    return sum;
}

console.log(sumOfArray([1, 5, 2]));

// Create a function that will take an array and return the sum of the even numbers 
function sumOfEven(array) {
    let sum = 0;
    for(let items of array) {
        if(items % 2 === 0) {
            sum += items;
        }
    }
    return sum;
}
console.log(sumOfEven([1,4,2,3]));

/*
Write a program to count the total number of alphabets, digits and special characters in the string 

input: he*llo20@2#5
output:
alphabet: 5
digits: 4
special character: 3
*/

function charCounter(str1) {
    let alphabet = 0;
    let digits = 0 
    let specialChar = 0;

    for(let char of str1) {
        if (("A" <= char && char <= "Z") || ("a" <= char && char <= "z")) {
            alphabet += 1;
        } else if ("0" <= char && char <= "9") {
            digits += 1;
        } else {
            specialChar += 1
        }
    }

    console.log(
        `alphabet: ${alphabet}\ndigits: ${digits}\nspecial character: ${specialChar}`
    );
}

charCounter("he*llo20@2#5");