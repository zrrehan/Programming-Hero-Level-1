const person = {
    name: "Jin Sakai",
    id: 24642208,
    graduated: false,
    currentCourse: ["Intro to Robotics", "Algorithm", "Database Management", "Samurai History"],
    cgpa: 3.79,
    "enrollment-year": 2022
}

console.log(person);
console.log(person["enrollment-year"]);
delete person["enrollment-year"];
console.log(person)
