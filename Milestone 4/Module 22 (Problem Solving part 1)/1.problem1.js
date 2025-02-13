/*
    Problem Statement:
    Write a JavaScript function that converts:
    1. Kilometers to meters.
    2. Feet to inches.
*/

function kmToM(km) {
    return km*1000;
}

function ftToIn(ft) {
    return ft * 12;
}

console.log(kmToM(12));
console.log(ftToIn(6.4));