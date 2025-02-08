let numbers = [3, 14, 5, 12, 9, 87, 45];

for(let num of numbers) {
    console.log(num);
}

for(let items of numbers) {
    if(items % 2 == 0) {
        console.log(`${items} is even`);
    } else {
        console.log(`${items} is odd`);
    }
}