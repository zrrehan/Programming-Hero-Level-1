const people = ["Rehan", "Sadia", "Ezio", "Claudia", "Arno", "Connor", "Altair"];

// ForEach 
people.forEach((person)=> {
    console.log(person);
});

// filter
let filtered  = people.filter((person) => {
    return person.length == 5
 })
console.log(filtered)

