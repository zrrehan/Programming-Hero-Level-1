function greetHello(person) {
    console.log(`Hello ${person}`);
}

function sayHelloToAll(greetFunction, allPersons) {
    for(let person of allPersons) {
        greetFunction(person);
    }
}

sayHelloToAll(greetHello, ["Ezio", "Altair"]); // greetHello is a callback function