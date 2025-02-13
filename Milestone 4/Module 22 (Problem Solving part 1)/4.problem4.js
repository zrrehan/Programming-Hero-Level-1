/*
    Create a function that takes an array and remove the duplicate values
*/

function removeDuplicate(array) {
    let noDuplicate = [] 
    for(let items of array) {
        if(!noDuplicate.includes(items)) {
            noDuplicate.push(items);
        }
    }
    return noDuplicate;
}

console.log(removeDuplicate([1,1,1,3,5,7,5,4,3]));