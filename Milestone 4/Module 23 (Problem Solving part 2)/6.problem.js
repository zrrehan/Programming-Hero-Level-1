/*
    Create a calculator that only allows ADD SUB MUL DIV 
*/

function calculator(num1, num2, operator) {
    if(operator.toLowerCase() == "add") {
        return num1 + num2;
    }
    else if(operator.toLowerCase() == "sub") {
        return num1 - num2;
    }
    else if(operator.toLowerCase() == "mul") {
        return num1 * num2;
    }
    else if(operator.toLowerCase() == "div") {
        return num1 / num2;
    } else {
        return "Only 'ADD' 'SUB' 'MUL' 'DIV' is allowed";
    }
}

console.log(calculator(1,0,"DIV"))