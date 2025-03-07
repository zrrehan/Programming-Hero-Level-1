function myFunc(num1, num2) {
    console.log(arguments) // we can see all the arguments in the console of web browser
    // arguments is array like object but not array 
    // how to convert it to array?
    let argArray = [...arguments]
    console.log(argArray)
}

myFunc(10,20,30,40,50,60);

