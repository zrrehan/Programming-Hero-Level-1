const user = {
    name: "Bruce Wayne",
    id: "0X187FBAA72901C",
    parent: {
        father: {
            name: "Thomas Wayne",
            id: "0x17231ABFFDCB"
        }
    }
}

// want to access user's father's name
console.log(user.parent.father.name)

// want to access user's father's mother (user's grandma)
// console.log(user.parent.father.mother.name) // OOPS error 
// so what if in future we need to add this so we need this code without error 
// here comes optional chaingin
console.log(user.parent.father.mother?.name) // undefined for now 