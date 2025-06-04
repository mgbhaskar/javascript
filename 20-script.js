// for...in
// ex---1
const person = {
    name: "Bhaskar",
    age: 25,
    city: "Hyderabad"
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  


// ex ---3


const university = {
    name: "IIT Bombay",
    location: "Mumbai",
    rank: 3
  };
  
  for (const key in university) {
    console.log(`${key}: ${university[key]}`);
  }

  

//   ex---3

const movie = {
    title: "Salaar",
    director: "Prashanth Neel",
    year: 2023
  };
  
  for (const key in movie) {
    console.log(`${key}: ${movie[key]}`);
  }
  
