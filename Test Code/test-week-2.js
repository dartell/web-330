//prototypes

var publication = {

    getType: function () {
    
    console.log("The publication type is '" + this.type + "'");
    
    }
    
    };
    
    
    var book = Object.create(publication, {
    
    "type": {
    
    "value": "Book",
    
    enumerable: true
    
    },
    
    "title": {
    
    "value": "Learning JavaScript Design Patterns."
    
    }
    
    });
    
    book.getType();
    
    console.log("The title is '" + book.title + "'");