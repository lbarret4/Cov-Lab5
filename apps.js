let myName = "Llewellyn Barrett";
const NUMBER_OF_STATES = 50;
let num = 5 + 4;

function queueNames(name) {
    name = name.toUpperCase();
    if (name.charCodeAt(0) > 76) {
        console.log('Back to the line!');
    } else {
        console.log('Next!')
    }
}