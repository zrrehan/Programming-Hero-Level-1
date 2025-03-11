console.log("Wrote before setTimeout");

setTimeout(() => {
    console.log("hello")
}, 2000); // 2 sec

console.log("Wrote after setTimeout");