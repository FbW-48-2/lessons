// 1
console.log(3 == "3");
console.log(3 === "3");

// Questions
// Loose comparison checks value but not type while strict comparison compares both value and type.

// Generally, we should use strict comparison to avoid unwanted errors.

// console.log(3 = "3");
// If we use an assignment operator, we get an error since we are not comparing anything anymore. Instead, we are assigning a value to another value which results in an "Invalid left-handed side in assignment."

//  2
let valueOfTrue = true;
console.log((!valueOfTrue) ? 
"This is true" : "This is false");

// 3. 

let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);

// When we console log `name`, we will print `Stacey` since the first truthy value will be returned. 