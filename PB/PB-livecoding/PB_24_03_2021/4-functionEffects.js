// Functions Effects
// 1) The functions Impact the Environment(Scope) without return
// 2) The functions with return Statement
// 3) The functions Impact the Environment (Scope) and return

//###################
//1- The functions Impact the Environment(Scope) without return

let num = 8;

console.log("num ==> ", num); // num ==>  8

function impactTheEnv() {
  num = 1000;
}

console.log("num ==> ", num); // num ==>  8
//impactTheEnv();
console.log("num ==> ", num); // num ==>  1000
