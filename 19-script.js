// for.....of

const movies = [
    { title: "Leo", director: "Lokesh Kanagaraj ", year: 2023 },
    { title: "Devara", director: " Koratala Siva ", year: 2024 },
    { title: "Dragon", director: " Ashwath Marimuthu", year: 2025 },      
    { title: "Maharshi", director: "Vamshi Paidipally ", year: 2019 },
    { title: "Rakta Charitra", director: " Ram Gopal Varma", year: 2010 },

    { title:"spirit ", director: "Sandeep Reddy", year: 'expected in 2026'},

  ];
  
  for (var movie of movies) 
    
    {
    console.log(`Title: ${movie.title}`);       //  one by one print

    console.log(`Director: ${movie.director}`);

    console.log(`Year: ${movie.year}`);
    if(movie.title=="Leo")
    {
      console.log(`i saw ${movie.title} movie`)
    }

  }


// example--2

// const cities = [
//     { name: "Hyderabad", state: "Telangana" },
//     { name: "Bangalore", state: "Karnataka" },
//     { name: "Mumbai", state: "Maharashtra" }
//   ];
  
//   for (const city of cities) {
//     console.log(`City: ${city.name}, State: ${city.state}`);
//   }


  
// // example--3

// const softwares = [
//     { name: "MS Word", type: "Word Processor" },
//     { name: "Photoshop", type: "Image Editor" },
//     { name: "VS Code", type: "Code Editor" },
//     { name: "Chrome", type: "Web Browser" }
//   ];
  
//   for (const software of softwares) {
//     console.log(`Name: ${software.name}, Type: ${software.type}`);
//   }



// // example--4


const properties =
 [
    { name: "Green Valley", type: "Apartment", price: 4500000 },
    { name: "Sky Heights", type: "Villa", price: 12000000 },
    { name: "Sunrise Plots", type: "Plot", price: 2500000 }
  ];
  
  for (var property of properties) {
    console.log(`Name: ${property.name}`);
    (`Type: ${property.type}`);
       (`Price: ₹${property.price}`);
      
  }
  

  // console.log(`Title: ${movie.title}`);
