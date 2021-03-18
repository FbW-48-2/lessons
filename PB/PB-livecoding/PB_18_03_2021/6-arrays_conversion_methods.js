// Array Methods
// name of the file 6-arrays_conversion_methods.js

//! Conversion Methods join()

/**
  - array.join(separator) ==> method joins all the elements of an array into a string.

 separator − Specifies a string to separate each element of the array. If omitted, the array elements are separated with a comma.
 */

const colors = ["pink", "blue", "red", "yellow"];

console.log(colors.join()); // pink,blue,red,yellow

console.log(colors.join("/")); // pink/blue/red/yellow

console.log(colors.join(" ")); // pink blue red yellow

console.log(colors.join("!")); // pink!blue!red!yellow
console.log(colors.join(" # ")); // pink # blue # red # yellow

console.log(colors.join("\n"));

/**
pink
blue
red
yellow
 */
//-------------------🤖🤖🤖🤖------------

// Task
//? input "f-o-o"  ==> output "oof"

//? input 'ES6 in Practice' ==> output "ecitcarP ni 6SE"
