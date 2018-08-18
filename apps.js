let myName = "Llewellyn Barrett";
const NUMBER_OF_STATES = 50;
let num = 5+4;

function queueNames(name) {
    name = name.toLowerCase();
    firstLetter=name.charCodeAt(0);
    if ( firstLetter > 108 && firstLetter < 123) {
        console.log('Back to the line!');
    } else if(firstLetter > 122 || firstLetter < 97){
        console.log('Invalid Name');
    } else {
        console.log('Next!')
    } 
}