const player = {
    name: "Cristiano Ronaldo",
    jersey: 7,
    age: 40,
    height: "6ft 2in"
}

console.log(Object.keys(player));
// Output: [ 'name', 'jersey', 'age', 'height' ]

console.log(Object.values(player));
// Output: [ 'Cristiano Ronaldo', 7, 40, '6ft 2in' ]

console.log(Object.entries(player));
// Output
// [
//     ['name', 'Cristiano Ronaldo'],
//     ['jersey', 7],
//     ['age', 40],
//     ['height', '6ft 2in']
// ]