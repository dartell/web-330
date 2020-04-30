
//function class refresher
function House(bedrooms) {

    this.bedrooms = bedrooms;
    
    this.color = "White";
    
    this.bathrooms = 2;
    
    
    this.getDetails = function() {
    
    return this.bedrooms + " bedroom, " + this.bathrooms + " bath " + this.color + " house.";
    
    };
    
    }
    
    var house = new House(5);
    
    console.log(house.getDetails())

    //object Literal Refresher
    var house = {

        bedrooms: 4,
        
        bathrooms: 2,
        
        color: "White",
        
        getDetails: function() {
        
        return this.bedrooms + " bedroom, " + this.bathrooms + " bath " + this.color + " house.";
        
        }
        
        };
        
        console.log(house.getDetails());