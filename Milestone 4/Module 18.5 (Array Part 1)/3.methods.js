const avengers = ["Ironman", "Thor", "Spiderman"];

// Include method
console.log(avengers.includes("Thor"));

if(avengers.includes("Ironman")) {
    console.log("They can defeat Thanos");
} else {
    console.log("They will loose");
}

// indexOf 
console.log(avengers.indexOf("Spiderman"));
console.log(avengers.indexOf("Batman"));

// isArray 
console.log(Array.isArray("String")); // false
console.log(Array.isArray(avengers)); // true

// Join 
// array --> string 
avengersString = avengers.join()
console.log(avengersString)

avengersString = avengers.join("/")
console.log(avengersString)

// concating 
let avengersTeam = ["Ironman", "Thor", "Spiderman", "Captain America"];
let JLTeam = ["Batman", "Superman", "Flash"];
let ultimateTeam = avengersTeam.concat(JLTeam)
console.log(ultimateTeam)

// slice
let fruites = ["Apple", "Orange", "Berry", "Banana"];
let slicedFruites = fruites.slice(1,3)
console.log(slicedFruites)