// Array Methods
// name of the file 3-arrays_manipulation_methods.js

//! Manipulation Methods  concat(), slice() and splice()

//-----------------######----------------
/**
 1 - array.concat(value1, value2, ..., valueN) ==> method returns a new array that includes values from other arrays and additional items. It accepts any number of arguments – either arrays or values.

 *****valueN − Arrays and/or values to concatenate to the resulting array.
 */

const array_1 = ["A", "B", "C"];

const array_2 = [2, 5, 7, 11];

const concatArrays = array_1.concat(array_2);
console.log("concatArrays ==> ", concatArrays);
/*
 [
  'A', 'B', 'C', 2,
  5,   7,   11
]
*/

//-------------------------###########-----------

/**
 2- array.slice( begin [,end] ) ==> method extracts a section of an array and returns a new array.

**** begin − Zero-based index at which to begin extraction.

**** end − Zero-based index at which to end extraction. // NOT INCLUDED
 */

const names = ["Jon", "Max", 33, 99, true];

const sliceOfNames = names.slice(1, 3);

console.log("sliceOfNames ==> ", sliceOfNames); // [ 'Max', 33 ]
console.log("names ==> ", names); // [ 'Jon', 'Max', 33, 99, true ]

const complexArray = [22, ["A", "B", "C"], "Max", "Pilar"];

const sliceOfComplexArray = complexArray.slice(1, 3);
console.log("sliceOfComplexArray ==> ", sliceOfComplexArray);
// [ [ 'A', 'B', 'C' ], 'Max' ]

console.log(complexArray[1]); // ["A", "B", "C"]
console.log(complexArray[1][2]); // C
//---------------------🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖------------------

/* 
3 - array.splice(index, howMany, [element1][, ..., elementN]) ==> method changes the content of an array, adding new elements while removing old elements.

 *** index − Index at which to start changing the array.

 ***** howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.

****** element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.
*/

const numbers = [22, 55, 7, 100, 99, 8, 10, 4, 5, 44];
console.log("numbers ==> ", numbers); // [22, 55, 7, 100, 99, 8, 10, 4, 5, 44];
console.log(numbers.splice(3, 2)); // [ 100, 99 ]
console.log("numbers ==> ", numbers);

/**
 [
  22, 55, 7,  8,
  10,  4, 5, 44
]
 */

const chrs = ["a", "b", "c", "Hallo", true, "welcome to array", "Alex", 99];

chrs.splice(4, 3);

console.log(chrs);

// true, "welcome to array", "Alex" => 3 elements
// ["a", "b", "c", "Hallo", 99];
