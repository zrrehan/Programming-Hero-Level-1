// get the highest number from an array 
function highestInArr(array) {
    let max = -Infinity;
    for(let items of array) {
        if(items > max) {
            max = items;
        } 
    }
    return max;
}

console.log(highestInArr([1,4,2,7,5,0]));