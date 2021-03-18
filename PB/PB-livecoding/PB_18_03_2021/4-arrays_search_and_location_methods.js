// Array Methods
// name of the file 4-arrays_search_location_methods.js

//! Search and Location Methods indexOf() and includes()

//---------------############-------------

/**
 1- array.indexOf(searchElement[, fromIndex]) ==> method returns the first index at which a given element can be found in the array, or -1 if it is not present.

***** searchElement − Element to locate in the array.

****fromIndex -  The index at which to begin the search.

*/

const colors = ["red", "blue", "pink"];

console.log(colors.indexOf("blue")); // 1

console.log(colors[1]); // blue

//--------------###########--------------------------------------------------------

/**
2- array.includes(valueToFind, startIndex) ==> method determines whether an array includes a certain value, returning true or false .

**** valueToFind - The value to search for.

**** startIndex - The position in this array at which to begin searching for valueToFind
 */

console.log(colors.includes("pink")); // true
console.log(colors.includes("yellow")); // false
console.log(colors.includes("Pink")); // false
