// Synchronous



// function chooseItem() {
//     console.log("Step 1: Choose an item");
// }

// function addToCart() {
//     console.log("Step 2: Add item to cart");
// }

// function makePayment() {
//     console.log("Step 3: Make payment");
// }

// // Synchronous Execution
// chooseItem();   
// addToCart();
// makePayment();

// //example ----2

// function goToTheatre() {  
//     console.log("Step 1: Go to the theatre");
// }

// function buyPopcorn() {
//     console.log("Step 2: Buy popcorn");
// }

// function watchMovie() {
//     console.log("Step 3: Watch the movie");
// }

// goToTheatre();
// buyPopcorn();
// watchMovie();


   
// asynchronous




function goToTheatre(callback) {
    setTimeout(() =>
        
        {
        console.log("Go to the theatre");
        callback();
    }, 1000); // 1 second delay
}

function buyPopcorn(callback) {
    setTimeout(() => {


        console.log("Buy popcorn");
        callback();
    }, 1000); // 1 second delay
}

function watchMovie(callback) {
    setTimeout(() => {
        console.log("Watch the movie ");
        callback();
    }, 1000); // 1 second delay
}

// Asynchronous execution using callbacks (callback hell)
goToTheatre(() => {
    buyPopcorn(() => {
        watchMovie(() => {
            console.log("Movie experience completed!");
        });
    });
});

