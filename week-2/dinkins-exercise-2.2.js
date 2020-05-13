/*
============================================
; Title:  Prototypes
; Author: Professor Krasso
; Date:   4 May 2020
; Modified By: Darius Dinkins
; Description: Demonstrating code re-use with prototypes
;===========================================
*/



/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//header
const header = require('../Dinkins-header.js'); 

console.log(header.display("Darius", "Dinkins", "Assignment 2.2"));

var person = {
    getAge: function() {
        return this.age; 
    }
}

var darius = Object.create(person, {
    "age":
    {
        "value": "32"
    },
    "fullname":
    {
        "value": "Darius Pants"
    }
});

darius.getAge();

console.log("The person's full name is: '%s'", darius.fullname);
console.log("The person's age is '%s'", darius.age);


// end program