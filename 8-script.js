// 1. Grouping statements in a function
function greetUser(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);
    console.log("Welcome to the website!");
}



greetUser("Alice");

// 2. Grouping statements in an if/else block
let age = 16;

if (age >= 18) 
    {
    console.log("You are an adult.");
    console.log("You can vote.");
}

else

 {
    console.log("You are a minor.");
    console.log("You cannot vote yet.");
}

// 3. Grouping statements in a loop

for (let i = 1; i <= 3; i++)
    
    {
    console.log("This is loop number " + i);
    console.log("Inside the loop block.");
}

// 4. Grouping values in an object
let user = 

{
    name: "Alice",
    age: 25,
    isMember: true
};

console.log("User info:", user);
