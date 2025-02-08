for(let i = 0; i < 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}
console.log("loop ended");


for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Skip the loop", i);
        continue;
    }
    console.log("Didn't Skip", i)
}