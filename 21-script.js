// // using while 

//example 1

let countryPosition = 0;

const countryList = 
[
  { countryName: "India", capital: "New Delhi" },       //0
  { countryName: "France", capital: "Paris" },        //1
  { countryName: "Australia", capital: "Canberra" },  //3
  { countryName: "Canada", capital: "Ottawa"},   //4
];

while (countryPosition < countryList.length) {
  console.log(`Country: ${countryList[countryPosition].countryName}`);
  console.log( `Capital: ${countryList[countryPosition].capital}`);
  console.log(`population: ${countryList[countryPosition].populationt}`);    // undefined

  if (countryList[countryPosition].countryName === "India") 
    {
        console.log(`🇮🇳 I live in ${countryList[countryPosition].countryName}`);
  }

  countryPosition = countryPosition + 1;
}
//example   2

// let moviePosition = 0;

// const movies = [
//   { title: "Leo", director: "Lokesh Kanagaraj", year: 2023 }, //0
//   { title: "Devara", director: "Koratala Siva", year: 2024 }, //1
//   { title: "Dragon", director: "Ashwath Marimuthu", year: 2025 }, //2
//   { title: "Maharshi", director: "Vamshi Paidipally", year: 2019 }, //3
//   { title: "Rakta Charitra", director: "Ram Gopal Varma", year: 2010 }, //4
//   { title: "Spirit", director: "Sandeep Reddy", year: "expected in 2026" } //5
// ];

// while (moviePosition < movies.length)
//      {
//   console.log(` Title: ${movies[moviePosition].title}`);
//   console.log(` Director: ${movies[moviePosition].director}`);
//   console.log(` Year: ${movies[moviePosition].year}`);

//   if (movies[moviePosition].title === "Devara") {
//     console.log(` i watched ${movies[moviePosition].title}!`);
//   }

//   moviePosition = moviePosition + 1;
// }


// example --3


// let carPosition = 0;

// const carList = [
//   { model: "Swift", company: "Maruti", year: 2020 }, //0
//   { model: "Thar", company: "Mahindra", year: 2022 }, //2
//   { model: "Fortuner", company: "Toyota", year: 2023 }, //3
// ];

// while (carPosition < carList.length) {
//   console.log(` Model: ${carList[carPosition].model}`);
//   console.log(` Company: ${carList[carPosition].company}`);
//   console.log(` Year: ${carList[carPosition].year}`);

//   if (carList[carPosition].model === "Thar") {
//     console.log(` I love the ${carList[carPosition].model} car!`);
//   }

//   carPosition = carPosition + 1;
// }

