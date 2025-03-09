// JSON = JavaScript Object notation 
// we got all the values from backend VIA JSON

// normal Data Structure to JSON

let person = {
    name: "Cristiano",
    number: 7,
    team: ["Portugal", "Al-Nassr"],
    isAthelete: true
};

// Converting the JavaScript object to a JSON string
let jsonPerson = JSON.stringify(person);
console.log(jsonPerson); // JSON is a string representation of the object


// Converting the JSON string back to the original JavaScript object
let prevPerson = JSON.parse(jsonPerson);
console.log(prevPerson); // this is the previous object 