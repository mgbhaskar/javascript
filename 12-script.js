//  movie type Constructor Function
function Car(heroName, movieTitle, color) {
    console.log(" MASS HERO ENTRY!!");
    this.brand = heroName;      
    this.model = movieTitle;    
    this.color = color;  
    console.log(` Introducing our Hero: ${this.brand}, Movie: "${this.model}", Costume: ${this.color}`);
  }
  
  Car.prototype.getCarInfo = function () {
    console.log(`  "thaggedele  ${this.brand}... ${this.model} from pushpa movie"`);
    console.log(" Screen presence:", this);
  };
  
  Car.prototype.getDriveInfo = function () {
    console.log(` ACTION SEQUENCE: ${this.color} color dress vesi, ${this.brand} enter batlefield in "${this.model}"!`);
    console.log(" Crowd goes wild:", this);
  };
  
  
//   console.log(" ----- Guest Appearance Scenes with call/apply/bind -----");

  
  const guestHero = { brand: "Allu Arjun", model: "Pushpa", color: "Red" };
//   call 


  Car.prototype.getCarInfo.call(guestHero);
  

//  apply
  Car.prototype.getDriveInfo.apply(guestHero);

  // bind
  
  const massEntry = Car.prototype.getCarInfo.bind(guestHero);
  massEntry(); 
  