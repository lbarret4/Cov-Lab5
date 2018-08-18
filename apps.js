//Creates varibles and constant 
let myName = "Llewellyn Barrett";  
const NUMBER_OF_STATES = 50;      
let num = 5 + 4;

// Test  of  queueNames function various names  values
queueNames('{John');        // Should prompt 'Invalid Name'
queueNames('tom');          // Should prompt 'Back to the line'
queueNames('Amanda');       // Should prompt 'Next!'
queueNames('Nancy');        // Should prompt 'Back to the line'
queueNames('luke');         // Should prompt 'Next!'
queueNames('1kim');         // Should prompt 'Invalid Name'


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