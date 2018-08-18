//Creates varibles and constant 
let myName = "Llewellyn Barrett";  
const NUMBER_OF_STATES = 50;      
let num = 5 + 4;

// Test of queueNames function various names values
queueNames('{John');        // Should display 'Invalid Name'
queueNames('tom');          // Should display 'Back to the line'
queueNames('Amanda');       // Should display 'Next!'
queueNames('Nancy');        // Should display 'Back to the line'
queueNames('luke');         // Should display 'Next!'
queueNames('1kim');         // Should display 'Invalid Name'


sayHello();

//
checkAge('Charles',21);
checkAge('Abby',27);
checkAge('james',18);
checkAge('John',17);

//  This function take name and say if the're next in the queue or sent to back of the line.
function queueNames(name) {

    // Make sure name is in lower case 
    name = name.toLowerCase();

    //Take first letter of name
    firstLetter = name.charCodeAt(0);

    if (firstLetter > 108 && firstLetter < 123) {

        // Displays 'Back to the line!' to console, if the first letter of the name is between the letter L and is letter Z.
        console.log('Back to the line!');

    } else if (firstLetter > 122 || firstLetter < 97) {

        // Display 'Invalid  Name!' to console, if  the first letter is not a chracter from the alphabet.
        console.log('Invalid Name!');


    } else {
        //Display 'Next' to console, if the first letters is before letter M. 
        console.log('Next!')
    }    
}

// Displays 'Hello World!'
function sayHello(){
        console.log('Hello World!');
}

function checkAge(name, age){
    name=name[0].toUpperCase()+name.slice(1);
    if(age < 21){
        console.log(`Sorry ${name}, you aren\'t old enough to view this page!`);
    }

}