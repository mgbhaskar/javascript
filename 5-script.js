

//Global Scope


let greencolor = "green";           //global block
console.log(greencolor);


{
    let bluecolor = "blue";
     console.log(greencolor);        //local-block1
     console.log(bluecolor);         //✅ Accessible, because greencolor is global
 
     console.log(pinkcolor);    //❌ ReferenceError: pinkcolor is not defined

}

{
    let pinkcolor = "pink";
  console.log(greencolor);          //local-block2
        console.log(pinkcolor);
 }
 
// //example-2

// let greencolor = "green";
// // console.log("Global:", greencolor); 

// {
    
//     let bluecolor = "blue";

//     console.log("Block 1 - green:", greencolor); 
//     console.log("Block 1 - blue:", bluecolor);   

   
// }

// {
//     let pinkcolor = "pink";

//     console.log("Block 2 - green:", greencolor); 
//     console.log("Block 2 - pink:", pinkcolor);  
    
// }


// example-3



// let animal = "Tiger";

// function zoo() 
// {
//     let bird = "Parrot";
//     console.log(" function - animal:", animal); 


//     console.log(" function - bird:", bird);     
//     {
//         let reptel = "Lizard";
//         console.log(" block - animal:", animal); 
//   console.log(" block - bird:", bird);     

//         console.log("block - reptile:", reptel); 
//     }

//     console.log(reptel); // error
// }

// zoo();

// console.log("Outside function - animal:", animal);
