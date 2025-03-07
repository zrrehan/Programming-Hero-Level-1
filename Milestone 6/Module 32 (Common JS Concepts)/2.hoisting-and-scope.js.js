function myDearFunction(num1, num2) {
    let result1 = num1 * num2;

    if (true) {
        var result2 = num2 / num1; // `var` is function-scoped, so it stays available throughout the function.
    }

    console.log(result1, result2);
    // Here, `result2` is accessible because we used `var`, and when I declared it inside the `if` block,
    // JavaScript moved the variable declaration to the top of the function.
    // This is called hoisted 
}

myDearFunction(10, 30);
