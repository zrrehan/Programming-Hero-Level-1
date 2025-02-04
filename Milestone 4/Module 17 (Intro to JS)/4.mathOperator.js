// Addition
var num1 = 10;
var num2 = 15;
var addition = num1 + num2;
console.log(addition);
addition += 1;
console.log(addition)

// Substraction 
var sub = num1 - num2;
console.log(sub);

// multiplication 
var mul = num1 * num2;
console.log(mul);

// division 
var div = num1 / num2;
console.log(div);

// aritmating operation with String 
console.log("20" + 20);
console.log("40" - 20);
console.log("40" * 20);
console.log("40" / 20);

// issue
console.log(0.1 + 0.2); 
/*
   JavaScript uses floating-point arithmetic (IEEE 754 standard),
   which cannot precisely represent some decimal numbers like 0.1 and 0.2 in binary.
   This causes small rounding errors, resulting in 0.30000000000000004 instead of exactly 0.3.
*/
// solution
console.log((0.1+0.2).toFixed(1));