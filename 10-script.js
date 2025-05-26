
// // 1) Object Method

// const user =

// {
//     name: "bhaskar",
//     greet: function() 
    
//     {
//       console.log("Hello, " + this.name);
//     }
//   };
  
//   user.greet();

// 2) constructor functions

// Constructor Function for a Hero


function Hero(name, punchDialog, movie) 

{
    this.name = name;
    this.punchDialog = punchDialog;
    this.movie = movie;
  
    this.introduce = function()
    
    {
      console.log(`Name ${this.name}!`);
      console.log(`Movie: ${this.movie}`);
      console.log(`Dialog: "${this.punchDialog}"`);
    };
  }
  
  const hero1 = new Hero("bhaskar", "Nenu Trend Follow Avvanu... Trend Set Chestha!", "Dookudu");
  
  hero1.introduce();
  
  