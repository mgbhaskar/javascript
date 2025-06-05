//  callback hell



// function stepone(callbackFn){
//     console.log("step one");
//     callbackFn();
// }
// function steptwo(callbackFn){
//     console.log("step two");
//     callbackFn();
// }
// function stepthree(){
//     console.log("step three");
// }

// stepone(()=>{
//     steptwo(()=>{
//         stepthree();
//     }); 
// })




function announceDevara(callback) {
    setTimeout(() => {
        console.log("Devara movie announced");
        callback();
    }, 2000);
}

function shootDevara(callback) {
    setTimeout(() => {
        console.log("Devara movie shooting started");
        callback();
    }, 3000);
}

function releaseDevara(callback) {
    setTimeout(() => {
        console.log("Devara movie released");
        callback();
    }, 3000);
}

// Callback Hell
announceDevara(() => {
    shootDevara(() => {
        releaseDevara(() => {
            console.log("Devara movie journey completed");
        });
    });
});
