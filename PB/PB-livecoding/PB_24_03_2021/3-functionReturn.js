// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

function greeting() {
  console.log("Hallo world!"); // Hallo world!
}

console.log(greeting()); // undefined

function greetingWithReturn() {
  return "Hallo world! with return keyword"; // Hallo world!
}

console.log(greetingWithReturn()); // Hallo world! with return keyword

console.log(console.log("Hallo world!")); //undefined
