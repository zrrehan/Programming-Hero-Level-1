// Object Destructuring
const player = {
    name: "Cristiano Ronaldo",
    jersey: 7,
    age: 40,
    height: "6ft 2in"
}

let {name, jersey, age, height} = player // the name of var should be similiar to Key, and u dont need them to be in serial
console.log(name, jersey, age, height)

// Array Destructuring 
let array = ["Rehan", "Sadia"];
let [person1, person2] = array;
console.log(person1, person2)