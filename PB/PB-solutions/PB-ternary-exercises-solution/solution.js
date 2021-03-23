//  

const isDog = true;

isDog == true ? console.log("Pat, pat, good dog"): console.log("Find me a dog to pat!");


//2. Declare a variable named speedLimit. If speedLimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, grandma'.

const speedCheck = 50;

const yourSpeed = 51;

console.log(speedCheck < yourSpeed ? "you're going too fast!" : "You're driving below the speed limit, Oma");

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

const age = 12;

age > 16? console.log("serve beer"): console.log("serve butter beer");

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

const isStudent = false;

console.log(isStudent == true? "Ticket costs €5,00": "Ticket costs €12,00")

//5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 

const okMarie = "bread";

okMarie == "cake"? console.log("Let them eat cake") : console.log("Oh, bother");

//6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

let firstNumber = 30;
console.log((firstNumber % 2 === 0) ? `${firstNumber} is even` : `${firstNumber} is odd`);

let secondNumber = 939;
console.log((secondNumber % 2 === 0) ? `${secondNumber} is even` : `${secondNumber} is odd`);

let thirdNumber = 40.9;
console.log((thirdNumber % 2 === 0) ? `${thirdNumber} is even` : `${thirdNumber} is odd`);
