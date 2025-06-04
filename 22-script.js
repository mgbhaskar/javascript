 //  do while  
 let countryPosition = 0;

const countryList = [
  { countryName: "India", capital: "New Delhi", continent: "Asia" },       //0
  { countryName: "France", capital: "Paris", continent: "Europe" },        //1
  { countryName: "Australia", capital: "Canberra", continent: "Australia" },  //3
  { countryName: "Canada", capital: "Ottawa", continent: "North America" },   //4
];

do {
  console.log(` Country: ${countryList[countryPosition].countryName}`);
  console.log(` Capital: ${countryList[countryPosition].capital}`);

  if (countryList[countryPosition].countryName === "India") {
    console.log(` I live indiaaa ${countryList[countryPosition].countryName}`);
  }

  countryPosition = countryPosition + 1;

}
 while (countryPosition < countryList.length);
// } while (countryPosition < countryList.length);


