/*
Expressions:
comparison operators (===,==, !==,!= , >=, <=, >, <)

returns true or false

!!Using assignment (`=`)
*/

// === vs ==

// === check the value and data type
// ==  just check the value

console.log(" 5 === 5 ", 5 === 5); //  5 === 5  true
console.log(" 5 == 5 ", 5 == 5); //  5 == 5  true

console.log(" 5 == '5' ", 5 == "5"); //  5 == '5'  true
console.log(" 5 === '5' ", 5 === "5"); //  5 === '5'  false

console.log("19 != 19 ", 19 != 19);

console.log("1 == 1 && 1 == 2 ", 1 == 1 && 1 == 2); // false ==> true && false
console.log(1 == 2 && 1 == 1); // false && true

// >=   <=    >     <

console.log(10 < 10); // false
console.log(12 <= 12); // true

console.log(5 > 5); // false
console.log(7 >= 7); // true

/**
  truthy value  1,'ABC', true, ' '
  true ==>  true

  falsy value 0, '', null, undefined, false, NaN
  false ==> false
 */

// && ==> pick up the first falsy case
// || ==> pick up the first truthy case

console.log(1 && "hallo" && undefined && false); // undefined
console.log(1 && null && undefined && false); // null

console.log(1 && -2 && "0" && false); // false

console.log(undefined || "0" || 0 || true); // "0"

console.log((" " && 0) || (false && true) || 0 || "Hallo"); // (truthy && falsy) || (falsy && truthy)

// sign up
let userName = "Jo";
let userEmail = "jo@gmail.com";
let userPassword = "12345";
let confirmPassword = "12345";

if (userPassword == confirmPassword) {
  if (userName.trim() && userEmail.trim() && userPassword.trim()) {
    console.log("the user sign up!");
  } else {
    console.log("there is something missing!!");
  }
} else {
  console.log("the passwords are not identical!");
}
