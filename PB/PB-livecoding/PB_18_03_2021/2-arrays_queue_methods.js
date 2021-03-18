// Array Methods

// name of the file 2-arrays_queue_methods.js

//! Queue Methods    shift() and unshift()

// shift() removes the first item in the array and returns it, decrementing the length of the array by one.

const colors = ["pink", "blue", "green"];

console.log("colors ==> ", colors); // [ 'pink', 'blue', 'green' ]

colors.shift();

console.log("colors ==> ", colors); // [ 'blue', 'green' ]

//##########################
console.log("#################################");
//##########################

// unshift()  adds any number of items to the front of an array and returns the new array length.

const names = ["Alex", "Jo"];

console.log("names ==> ", names); //[ 'Alex', 'Jo' ]
names.unshift("Ghassan");

console.log("names ==> ", names); // [ 'Ghassan', 'Alex', 'Jo' ]
