// JSON = JavaScript Object notation 
// we got all the values from backend VIA JSON

// normal Data Structure to JSON

let person = {
    name: "Cristiano",
    number: 7, 
    team: ["Portugal", "Al-Nassr"],
    isAthelete: true
}

// converting to JSON 
let jsonPerson = JSON.stringify(person)
console.log(jsonPerson) // Json typeof is string

// converting Json to normal previous data structure 
let prevPerson = JSON.parse(jsonPerson);
console.log(prevPerson); // this is the previous object 