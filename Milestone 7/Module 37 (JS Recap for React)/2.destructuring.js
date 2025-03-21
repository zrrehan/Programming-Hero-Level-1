// Array Destructuring
let array1 = ["Apple", "Mango", "Watermelon"];
let [fruit1, fruit2, fruit3] = array1; // Serial does matter
console.log(fruit1, fruit2, fruit3);

// Object Destructuring 
let fruit = {
    name: "Watermelon",
    color: "Green",
    price: 100
}

let {color, price, name} = fruit;
console.log(color, price, name); // no need for the serial but it needs to be same as the key name