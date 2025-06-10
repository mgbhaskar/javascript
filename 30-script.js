



// / //      Encapsulation    /////// 



class BankAccount 
{
    constructor(balance)
    {
        let _balance = balance;

        this.getBalance = function()
         {
            return _balance;
        };

        this.deposit = function(amount) 
        
        {
            if (amount > 0) _balance += amount;
        };
    }
}

let acc = new BankAccount(1000);


console.log(acc.getBalance()); // 1000
acc.deposit(500);
console.log(acc.getBalance()); // 1500




///    ABSRACTION   ////


class Vehicle {
    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }

    drive() {
        console.log("Driving...");
    }
}

let car = new Vehicle();
car.startEngine();  // Only interacts with exposed methods
car.drive();
car.stopEngine();
