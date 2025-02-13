/*
Problem Statement:  
Write a JavaScript function named `isLeapYear` that checks whether a given year is a leap year.

Conditions for a Leap Year:
1. A year is a leap year if it is divisible by 4.
2. But if the year is also divisible by 100, it must also be divisible by 400 to be a leap year.

Example Input & Output:
console.log(isLeapYear(2024)); // Output: true (Leap Year)
console.log(isLeapYear(1900)); // Output: false (Not a Leap Year)
console.log(isLeapYear(2000)); // Output: true (Leap Year)
console.log(isLeapYear(2023)); // Output: false (Not a Leap Year)
*/


function isLeapYear(year) {
    if(year % 100 == 0 && year % 400 == 0 && year % 4 == 0) {
        return true;
    } else if(year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false; 
    }
}
console.log(isLeapYear(2024)); // Output: true (Leap Year)
console.log(isLeapYear(1900)); // Output: false (Not a Leap Year)
console.log(isLeapYear(2000)); // Output: true (Leap Year)
console.log(isLeapYear(2023)); // Output: false (Not a Leap Year)