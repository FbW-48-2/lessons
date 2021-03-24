// Functions Effects
// 1) The functions Impact the Environment(Scope) without return
// 2) The functions with return Statement
// 3) The functions Impact the Environment (Scope) and return mixed between 1 and 2

//###################
//1- The functions Impact the Environment(Scope) without return

let num = 8;

console.log("num ==> ", num); // num ==>  8

function impactTheEnv() {
  num = 1000;
}

console.log("num ==> ", num); // num ==>  8
impactTheEnv();
//console.log(impactTheEnv()); // undefined
console.log("num ==> ", num); // num ==>  1000
//###################

//2- The functions with return Statement

function myFunction() {
  return "Today is sunny!";
}
console.log(myFunction()); // Today is sunny!

//###################
// 3- The functions Impact the Environment (Scope) and return mixed between 1 and 2

let person = "Tommy";

function changeNameAndReturnOutput() {
  person = "Max";
  return "The person name has been changed!";
}

console.log("person ==> ", person); // person ==>  Tommy
console.log(changeNameAndReturnOutput()); // The person name has been changed!
console.log("person ==> ", person); // person ==>  Max
