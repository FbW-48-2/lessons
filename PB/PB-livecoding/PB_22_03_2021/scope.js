// Global scope 

let name = 'Max'  // global 
let age = 35;

// Block scope everything inside {  } 
if(age === 35){  // comparing value and type 
    let job = 'frontend developer'; // only available inside the block  (let)
    var address = 'Berlin';  // available everywhere (var)
    let name = 'Mansour';
    console.log(name)
    console.log(job);
}
//console.log(job); // not available here (let)
console.log(address) // available here (var)
// let and const are Block scope variables 
// var is global scope variable 

console.log(name);
