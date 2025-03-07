/*
    Here i want a variable and when i call the funcion the variable will be increase by 1 and print 
    NB: i must code like it that i can't access or change the variable from the outside of the function

    ```
        let counter = 0;
        function sum() {
            counter++;
            console.log(counter)
        }

        sum(); // prints 1 
        sum(); // prints 2 
        .............
        .............
        .............
    ```
    But here I can easily access and change the counter value from the outside of the function
    So here is the following solution and this is called closure  

*/

function sum() {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
    }
}

let myFunct = sum(); // myFunct is a closure 
myFunct();
myFunct();
myFunct();