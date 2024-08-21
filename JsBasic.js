// Printing out in JS, use console.log
console.log("This is a JS Printout");

// Basic arithmetic in JS, we can also use console.log
console.log(2 + 2); // This will print out 4
console.log(20 / 4); // This will print out 5
console.log(20 / 3); // This will print out 6.666667
console.log(5 * 4); // This will print out 20

// Basic variable decleration and storing data in them
let message; // Declare a variable (storage) and named it 'message'
message = "Data to be stored"; // Now the variable is created, we put data in its memory area/space, we are placing a string "Data to be stored"
console.log(message); // To print out the data stored

// JavaScript.info Tasks:
// Level 1:
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let name = "John";
let admin = name; // Ignore the strikethrough for now - this is for TypeScript, which we will cover later!
console.log(admin);

// Giving the right name
// Level: 2
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

const PLANET = "Earth";
let currentUserName = "John";
