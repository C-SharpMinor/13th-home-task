// JavaScript Home Task: Numbers and Decision-Making

// Instructions: Create a folder named javascript-home-task containing these two files:

// index.html

// home-task.js

// Link home-task.js to index.html. Complete all tasks in home-task.js. Add comments to label each task and use console.log() to display your results in the browser console.

// 1. Practise a Simple if Statement

// Create batteryLevel and assign it 15.
const batteryLevel = 15;

// Use an if statement to display "Low battery! Please charge your device." when the level is below 20.
if (batteryLevel < 20){
    console.log("Low battery! Please charge your device.")
}

// Change the value to 80 and observe what happens.

// 2. Calculate a Cinema Bill

const ticketPrice = "2500";
const ticketCount = 3;
const budget = 10000;
// Convert ticketPrice to a number and calculate the total cost.
const numeralTicketPrice= Number(ticketPrice);
const totalCost= numeralTicketPrice * ticketCount;

// Display the total with two decimal places using toFixed().
console.log(totalCost.toFixed(2));

// Use if...else to display "Booking affordable" if the total is within the budget, or "Not enough money" otherwise.
if (totalCost <= budget){
    console.log("Booking Affordable")
}
else{
    console.log("Not enough money")
}


// 3. Practise Math Methods

const measurement = 7.68;
// Display its rounded, rounded-down and rounded-up values using the appropriate Math methods.
console.log(Math.round(measurement) );
console.log(Math.floor(measurement));
console.log(Math.ceil(measurement));


// Find the greatest and smallest numbers among 28, 93 and 16.
console.log(Math.max(28, 93, 16));
console.log(Math.min(28, 93, 16));


// 4. Check Library Access

const hasLibraryCard = true;
const hasGuestPass = false;
const isSuspended = false;
// A person can enter if they have a library card or a guest pass, and are not suspended.

// Combine logical operators to store the result in canEnter.

const canEnter= hasLibraryCard || hasGuestPass && !isSuspended;

// Use if...else to display "Access granted" or "Access denied".
if (canEnter){
    console.log("Access granted");   
}
else{
    console.log("Access denied");   
}

// Change the values to test both outcomes.

// 5. Choose a Delivery Charge

// Create a variable named distance.
const distance= 20;

// Use if...else if...else to display:

// "Delivery: ₦500" for distances from 0 to 5 km.
// "Delivery: ₦1,000" for distances above 5 up to 15 km.
// "Delivery unavailable" otherwise.
// Test with 4, 12 and 20.

if (0 < distance && distance <= 5){
    console.log("Delivery: ₦500");   
}
else if (5 < distance && distance <= 15){
    console.log("Delivery: ₦1,000");
}
else{
    console.log("Delivery unavailable");    
}


// Read-up: Explain each method below in your own words and write one example each:

// Number.isFinite(), Number.isInteger(), Number.isNaN(), Number.isSafeInteger(), Number.parseInt() and Number.parseFloat().

// Submission: Push your completed javascript-home-task folder, containing index.html and home-task.js, to GitHub. Share your repository link with me and be ready to explain your code in class tomorrow morning.
