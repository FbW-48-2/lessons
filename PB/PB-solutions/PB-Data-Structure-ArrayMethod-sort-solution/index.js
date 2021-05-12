//Sort in decreasing order
//1 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr );


//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

//2
//We can use slice() to make a copy and run the sort on it:

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let array = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(array);
  
  console.log( sorted );
  console.log( array );