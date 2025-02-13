const today = new Date();
console.log(today);

const date = new Date('2077-10-19');
console.log(date.getMonth()); // Return the 0 based month
console.log(date.getDate());

const specificDate = new Date(2091, 2, 26); // saving the month base on 0 based
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString("en-GB"));