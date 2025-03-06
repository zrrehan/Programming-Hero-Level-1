class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move() {
        console.log("I have moving");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat) {
        super(name, price); // Using the super class 
        this.seat = seat
    }
}

class PrivateCar extends Vehicle {
    constructor(name, price, company) {
        super(name, price);
        this.company = company;
    }
}

let tesla = new PrivateCar("Model 3", 20000, "Tesla");
console.log(tesla)

let nirala = new Bus("Nirala", 10000, 40);
console.log(nirala)