function addTwo(array) {
    let newArray = [] 
    for(let items of array) {
        newArray.push(items + 2);
    }
    return newArray;
}

console.log(addTwo([1,4,7,9,13]));

let array = [1, 4, 7, 9, 13]
const mapAddTwo = array.map(function(element) { // you can use array Funtion too
    return element + 2;
});
console.log(mapAddTwo)