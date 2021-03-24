// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

function firstFunction() {
  // function body
  console.log("welcome to functions!");
}

firstFunction();
firstFunction();
firstFunction();
firstFunction();
firstFunction();

//###############

function evenOrOdd() {
  let num = 4;

  if (num % 2 == 0) {
    console.log(`${num} is: even`);
  } else {
    console.log(`${num} is: odd`);
  }
}

evenOrOdd();
