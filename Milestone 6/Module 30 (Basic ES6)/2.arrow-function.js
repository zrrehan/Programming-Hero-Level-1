function add(num1, num2) {
    return num1 + num2;
}

let arrowAdd = (num1, num2) =>  num1 + num2; // this is equivalent to return num1 + num2 

console.log(add(2, 3), arrowAdd(2,3));

// arrow function with multi instructions
let arraySum = (array) => {
    let sum = 0;
    for(let items of array) {
        sum += items;
    }
    return sum;
};

console.log(arraySum([1,1,1,10]))