// let countrydetails;
// // console.log(countrydetails);

// let countrydetailsinuppercase = countrydetails.toUppercase();


// try {
//   let result = 10 /1;

//   console.log("Result:", result);

//   throw new Error("Something went wrong!");

// }
// catch (error) 

// {

//   console.error("Caught an error:", error.message);
// }
// finally

// {


//   console.log("This is always run finally.");
// }



let bhasakr = '{"id": 101, "name": "bhasakr m", "position": "Software Engineer", "salary": 75000}';

try

{
  let employee = JSON.parse(bhasakr);
  console.log("Employe Name:", employee.name);
  console.log("Position:", employee.position);
  console.log("Salary:", employee.salary);
} 

catch (error) 

   {
  console.error("bhasakr:", error.message);
} finally

{
  console.log("Attempted to parse employee bhaskar.");
}

