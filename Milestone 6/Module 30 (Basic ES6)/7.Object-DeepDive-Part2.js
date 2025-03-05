const player = {
    name: "Cristiano Ronaldo",
    jersey: 7,
    age: 40,
    height: "6ft 2in"
}

// adding a new key 
player.nationality = "Portugal";
console.log(player);

// restricting adding new key 
Object.seal(player);
player.team = "Al-Nassr"
console.log(player); // Nothing added 

// restricting changing the values of the key 
Object.freeze(player);
player.height = "6.2";
console.log(player); // the height Did't change