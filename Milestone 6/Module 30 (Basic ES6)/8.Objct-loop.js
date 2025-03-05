const player = {
    name: "Cristiano Ronaldo",
    jersey: 7,
    age: 40,
    height: "6ft 2in"
}

// for in loop (Special for object)
for(let key in player) {
    console.log(`${key} => ${player[key]}`);
}

console.log();
//  for of loop (with Object.entries) and Destructuring 
for(let [key, value] of Object.entries(player)) {
    console.log(`${key}: ${value}`);
}