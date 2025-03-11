let count = 0;
let myInterval = setInterval(() => {
    count++;
    console.log(`Hello - ${count}`);
    if(count == 5) {
        clearInterval(myInterval) // need to save the interval as a var then call that function
    }
}, 2000);
