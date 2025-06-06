// Promise

// let myPromise = new Promise(function(resolve, reject)
//  {
//     let success = false;
  
//     if (success) {
//       resolve("✅ Promise resolved sucessfully!");
//     } else 
//     {
//       reject("❌ Promise was rejected!");       
//     }
//   });
  
//   myPromise

//     .then(function(result) 
//     {
//       console.log(result); 
//     })


//     .catch(function(error) 
//     {
//       console.error(error);
//     });
  


// setTimeout 

// function asyncTask()

// {
//     return new Promise((resolve, reject) => 
//         {
//       setTimeout(() => {
//         resolve("✅ Task completed after 2 seconds");
//       }, 7000);
//     });
//   }
  
//   asyncTask()
//     .then((msg) => console.log(msg))
//     .catch((err) => console.error(err));
  


// Chaining promeses exampl


function stepOne() {
    return new Promise(resolve => {
      resolve("Step 1 done");
    });
  }
  
  
  function stepTwo() 
  
  {
    return new Promise(resolve => 
        
        {
      resolve("Step 2 done");
    });
  }
  
  stepOne()
    .then(result => 
        
        {
      console.log(result);
      return stepTwo();
    })
    .then(result => 
        
        {
      console.log(result);
    });
  