// // take the function 
// // in that function take 2 input parameters , first parameter should be primitive dattype(number) , 
// // second paramter should be function(callbackfunction)
// // Pass firstparameter as argumnet into that callbackfunction
// // return type should be void
// // i want to print length of books

// // f10 -> next line   1 
// // f11 -> inside of te function

// function processNumber(num, callback)
//  {
//     // F11
    
//     callback(num); // F11 callback and voud

    
// }

// const mobileTypes = ['realme', 'Sams Galaxy', 'One+', 'Pixel', 'mi'];

// processNumber(mobileTypes.length, function(length)
//  {
    
//     console.log("Number of mobile types:", length); 
// });


// console.log(typeof processNumber);



// example 2)
function printLength(num, callback)

{
    callback(num);

  }
  
  let books = ["book1", "book2", "book3"];
  
  printLength(books.length, (length) => console.log(length));