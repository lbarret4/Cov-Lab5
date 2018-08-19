//Creates varibles and constant 
let myName = "Llewellyn Barrett";  
const NUMBER_OF_STATES = 50;      
let num = 5 + 4;
let favoriteVeggies = ['Squash','Cucumber','Collard Greens','Carrots'];
let people = [{name:'Josh',age:20},{name:'Jane',age:15},{name:'Jimmy',age:35},{name:'Jen',age:40},{name:'Jemma',age:21}];
let numCharacter = getLength('Hello World');

// Test of queueNames function with various names values
queueNames('{John');        // Should display 'Invalid Name'
queueNames('tom');          // Should display 'Back to the line'
queueNames('Amanda');       // Should display 'Next!'
queueNames('Nancy');        // Should display 'Back to the line'
queueNames('luke');         // Should display 'Next!'
queueNames('1kim');         // Should display 'Invalid Name'

// Calls various functions   
sayHello();
displayVeggies(favoriteVeggies);
checkEvenOrOdd(numCharacter);


//Calls queueNames function with various names and age values
checkAge('Charles',21);
checkAge('Abby',27);
checkAge('james',18);
checkAge('John',17);

// Loops through an array of people and calls checkAge function with person's name and age 
for(person of people ){
    checkAge(person['name'],person['age']);
};

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

// Displays 'Sorry,(person's name) you aren't old enough to view this page!,' if person's age is below 21.
function checkAge(name, age){
    name=name[0].toUpperCase()+name.slice(1);
    if(age < 21){
        console.log(`Sorry ${name}, you aren\'t old enough to view this page!`);
    }

}

//Display an orded list of vegtables
function displayVeggies(vegetables){
    for ( i in vegetables ){
        console.log((+i+1)+'.'+vegetables[i]);
    }
}

//Return character length of a give string
function getLength(word){
    return word.length;

}

// Check if number is even or odd and displays, 'The world is nice and even!' or 'The world is an odd place!',respectively.
function checkEvenOrOdd(num){
    if(num % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');

    }
    
}