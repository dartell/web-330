/*
============================================
; Title:  Singleton Pattern
; Author: Professor Krasso
; Date:   13 May 2020
; Modified By: Darius Dinkins
; Description: A demonstration of the Singleton pattern ()
;===========================================
*/



/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
const header = require('../Dinkins-header.js'); 

console.log(header.display("Darius", "Dinkins", "Exercise 3.3"));

var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");

        return postgresDatabase;
    }

    return {
        getInstance: function() {  //checks to see if an instance is active if not it returns

            if (!instance) {
                instance = createInstance();

            }

            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}



databaseSingletonTest();
// end program