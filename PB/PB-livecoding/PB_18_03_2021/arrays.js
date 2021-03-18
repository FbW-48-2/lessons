//! Structural data types(complex)

// Arrays ==> ColleCtion RefeRenCe 💾

// let vs const
// let reassign and modified
// const modified

const arr = [1, 2, 3];

const copyArr = arr; // this not clone! just reference

//Arrays are one of the most common data types. Using them, you can handle collections of items.

const colors = ["red", "blue", "green"]; // create an array with tree strings
console.log(colors); // [ 'red', 'blue', 'green' ]
console.log(colors.length); // 3

const array_1 = []; // empty array
console.log(array_1.length); // 0
//---------------------------##########----------------

// Indexing into Arrays
// To get and set array values, you use square brackets and provide the zero-based numeric index of the value, as shown here:

const names = ["Alex", "Tommy", "Pilar"];
//! arrays indexing from 0
// get element in names array
console.log(names[2]); // Pilar
console.log(names[0]); // Alex
console.log(names); // [ 'Alex', 'Tommy', 'Pilar' ]
// set element in name array
names[1] = "Jo";
console.log(names); // [ 'Alex', 'Jo', 'Pilar' ]

names[100] = "Ghassan";
console.log(names);
console.log(names.length); // 101

//---------------------------##########----------------
// Array Length
// The number of items in an array is stored in the length property, which always returns 0 or more.

const mixArray = ["A", 33, true, null, undefined, "test", "Alex"];

console.log(mixArray.length); // 7

console.log(mixArray[5]); //test

console.log(mixArray[mixArray.length - 1]); //  Alex
console.log(mixArray.length - 1); // 6
