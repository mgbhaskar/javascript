// function abc() {
//     return " ,";
//   }
  
//   console.log(abc());     //  o/p = ,


async function getMovieDetails()

{
  console.log("Director nam: Vamshi Paidipally and Sandeep Reddy");

  console.log("Maharshi was released in 2019");
  console.log("Sprit is an upcoming movie in 2026");

  let movieMaharshiDetails = await delayGetMaharshiMovie();
  console.log(movieMaharshiDetails);

  let movieSpritDetails = await delayGetSpritMovie();  // fixed name
  console.log(movieSpritDetails);

  await delayFinalStep();
  console.log("All movie data fetched and processed.");
}

function delayGetMaharshiMovie()

{
  return new Promise(resolve => 
    {
    setTimeout(() => {
      resolve("Maharshi movie details fetched");
    }, 2000); // 2 seconds
  }
);

}

function delayGetSpritMovie()
{
  return new Promise(resolve => 
    {
    setTimeout(() => {
      resolve("Sprit movie details fetched");
    }, 3500); // 3.5 seconds
  }
);
}

function delayFinalStep() {
  return new Promise(resolve =>
     {
    setTimeout(() => {
      resolve("Final confirmation done");
    }, 3000); // 3 seconds
  }
);
}

getMovieDetails();
