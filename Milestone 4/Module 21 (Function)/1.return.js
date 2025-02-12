function substraction(num1, num2) {
    return num1 - num2;
}

let difference = substraction(5, 2);
console.log(difference);

function isOdd(num1) {
    return !(num1 % 2 == 0);
}

function isEven(num1) {
    return !isOdd(num1);
}

console.log(isOdd(3));
console.log(isEven(2));
