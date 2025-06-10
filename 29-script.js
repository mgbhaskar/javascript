class Person {
    constructor() {
        this._age = 18;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (Number.isInteger(value) && value > 0) {
            this._age = value;
        } else {
            console.log("Age must be a positive integer.");
        }
    }
}

let p = new Person();
console.log(p.age);  // 18                                      

p.age = 25;
console.log(p.age);  // 25

p.age = -5;          // Invalid
console.log(p.age);  // 25

p.age = null;    // Invalid
console.log(p.age);  // 25
