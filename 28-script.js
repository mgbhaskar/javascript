class Car {

    // 5th,6th line is 
    constructor(brand, model) {
      this.brand = brand;     
      this.model = model;     
    }
  
    displayDetails() {
      console.log(`Car: ${this.brand} ${this.model}`);
    }
  }
  
  const myCar = new Car("Toyota", "Innova");
  
  myCar.displayDetails(); // Output: Car: Toyota Innova
  



class Student

{
    constructor(name, grade)
     {
      this.name = name;     
      this.grade = grade;   
    }

  
    displayInfo()

     {
      console.log(`Student Name: ${this.name}`);
      console.log(`Grade: ${this.grade}`);
    }
  
    hasPassed()
    // console.log(`Student Name: ${this.name}`);
    // console.log(`Grade: ${this.grade}`);


     {

      if (this.grade >= 50)
         {
        console.log(`${this.name} has passed.`);
      }
      
      else 
      
      {
        console.log(`${this.name} has failed.`);
      }
    }
  }
  
  const student1 = new Student("Bhaskar", 75);
  
  student1.displayInfo();
  student1.hasPassed();
  