/*
    Create a function that takes an array and return the odd numbers in the array
*/

function oddNumbers(array) {
    oddArray = [] 
    for(let items of array) {
        if(items % 2 !== 0) {
            oddArray.push(items)
        }
    }
    return oddArray;
}

console.log(oddNumbers([1,2,3,4,5,6,7,8,9,0]))