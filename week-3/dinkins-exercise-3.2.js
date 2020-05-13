/*
============================================
; Title:  Factory Pattern
; Author: Professor Krasso
; Date:   13 May 2020
; Modified By: Darius Dinkins
; Description: A demonstration of the factory pattern
;===========================================
*/


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

const header = require('../Dinkins-header.js'); 

console.log(header.display("Darius", "Dinkins", "Exercise 3.2"));

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle (properties) {  //added database class
    this.username = properties.username || 'admin';  //remember || is a boolean operator that means "OR"
    this.password = properties.password || 'o-s3cret'; 
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g';
}

function Informix(properties) { //added database class
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle') {  //added Oracle class
        this.databaseClass = Oracle;
    }

    if (properties.databaseType == 'Informix') { //added Informix class
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();  //created new prototype functions
var oracle = oracleFactory.createDatabase( {
    databaseType: "Oracle",
    username: "Coolkid87",
    password: "shadesatnight"
});

var informixFactory = new DatabaseFactory(); //created new prototype functions
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "Squaredude94",
    password: "ilovegeometry"
});

console.log(oracle);
console.log(informix);





// end program