class Person {
    #marital_status;
    constructor(name, age, marital_status) {
        this.name = name;
        this.age = age;
        this.#marital_status = marital_status;
    }

    showMaritalStatus() {
        console.log(`${this.#marital_status} and This is pure private`);
    }
}

let ronaldo = new Person("Ronaldo", 40, "In Relationship");
console.log(ronaldo.marital_status); // Accessing Outside of the the class [not possible]
ronaldo.showMaritalStatus(); // Accessing inside of the class 