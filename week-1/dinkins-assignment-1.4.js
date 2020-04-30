/*
============================================
; Title:  Duck Typing (Interfaces)
; Author: Professor Krasso
; Date:   29 April 2020
; Modified By: Darius Dinkins
; Description: An interface is a way of defining the methods an object should have.  it doesn’t actually directly specify how those methods should be implemented (Osmani, 2013). 
    The name Duck Typing comes from the phrase, "If it looks like a duck and quacks like a duck"
;===========================================
*/

/*Using the provided starter code, complete the following:

Create a function constructor Car class with one parameter (model)
Create a function constructor Truck class with two parameters (model, year)
Create a function constructor Jeep class with three parameters (model, year, color)
Add a prototype method to each class called “start” – hint: review the duck typing example
The prototype method should output “ added to the racetrack!”
Define an empty racetrack array
Create a driveIt function with one parameter (vehicle)
From within the driveIt function call the “start” function on the vehicle – hint: vehicle.start and push the vehicle to the racetrack array
Create three (3) vehicle classes and pass them through the driveIt() function
Iterate over the racetrack array and output the results
Essentially, you will be replicating the duck typing example, but with vehicle types. Use the output from this example as a baseline for what I am expecting. 
*/
 
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

const header = require('../Dinkins-header.js'); 

console.log(header.display("Darius", "Dinkins", "Assignment 1.4"));

function Car(model) {
    this.model = model;
}

Car.prototype.start = function() {
    console.log("Added to the race track!")
}

function Truck(model, year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function() {
    console.log("Added to the race track!")
}

function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function() {
    console.log("Added to the race track!")
}

var raceTrack = []

function driveIt(vehicle) {
    vehicle.start();

    raceTrack.push(vehicle);
}

var saturn = new Car("Saturn");
var fonefifty = new Truck("F-150", 1999);
var wrangler = new Jeep("Wrangler", 2001, "Black")



driveIt(saturn);
driveIt(fonefifty);
driveIt(wrangler);

//Displays cars on track
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var k = 0; k < raceTrack.length; k++) {
    console.log(raceTrack[k].constructor.name + ": " + raceTrack[k].model);
}

// end program