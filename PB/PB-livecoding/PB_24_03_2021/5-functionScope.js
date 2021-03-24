// Global/Script Scope VS local Scope

let num = 66; // in global scope

console.log("num ==> ", num);
// let name; // init
function greeting() {
  // local Scope
  let name = "Pilar";
  //var name = "Pilar";
  // const name = "Pilar";
  // console.log(name) // Pilar
  return "Good morning " + name;
  // console.log(name) Not include
}

//console.log("name ==> ", name); // ReferenceError: name is not defined
//greeting();
//console.log("name ==> ", name); // ReferenceError: name is not defined
console.log("greeting() ==> ", greeting()); // greeting() ==>  Good morning Pilar
