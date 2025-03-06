class Product {
    company = "Sony"
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    details() {
        console.log("This is a gaming Console");
    }
}

/* wanna add these properties to the ps4 object
    - name = PlayStation-4
    - price = 200
    PS: it already has a property called `company = sony` in line 2
*/
const ps4 = new Product("PlayStation-4", 200)
console.log(ps4.name, ps4.price, ps4.company)
ps4.details();
console.log(ps4)