/*
============================================
; Title:  Class Refresher
; Author: Professor Krasso
; Date:   29 April 2020
; Modified By: Darius Dinkins
; Description: Refresh on literal objects and function class
;===========================================
*/

const header = require('../Dinkins-header.js'); //'./Dinkins-header.js'

console.log(header.display("Darius", "Dinkins", "Assignment 1.3"));




/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

function CellPhone(manufacturer,model,color,price) {

    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function() {
        
        return this.price;
    }

    this.getModel = function() {

        return this.model
    }

    this.getDetails = function() {

        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
            "\nColor " + this.color + "\nPrice: " + this.getPrice();;
    }
}

var cellPhone = new CellPhone("Google","Pixel","Black","500.00");

console.log(cellPhone.getDetails());


// end program