function normalFunction(a1, a2, a3) {
    console.log(arguments);
}

normalFunction("JS", "Python", "Ronaldo");

let arrowFunc = (a1, a2, a3) => {
    console.log(arguments);
}
// arrowFunc("JS", "Python", "Ronaldo");
// In normal fanction arguements works but in arrow function it does not.