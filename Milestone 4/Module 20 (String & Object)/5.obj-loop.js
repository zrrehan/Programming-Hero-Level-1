const person = {
    name: "Jin Sakai",
    id: 24642208,
    graduated: false,
    currentCourse: ["Intro to Robotics", "Algorithm", "Database Management", "Samurai History"],
    cgpa: 3.79,
    "enrollment-year": 2022
}

for(const keys in person) {
    console.log(`${keys} = ${person[keys]}`);
}