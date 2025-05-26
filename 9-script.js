// // // Inside object


// // let person =

// //  {
// //     name: "Bhaskar",
    
// //     greet: function()

// //      {

// //       console.log("Hello, my name is " + this.name);
// //     }


// //   };
  
// //   person.greet(); 

// //   console.log(typeof person);




// //2) Regular function

// function showThis() 

// {

//     console.log(this);

//   }
  
//   showThis();

//    console.log(typeof showThis);



//3) arrow =>

let user = 

{
    name: "bhaskar",
    greet: () =>                       // In arow funs, this does not refer object 
        
        {


      console.log(this.name);


    }
  };
  
  user.greet(); 
  
  
  
  