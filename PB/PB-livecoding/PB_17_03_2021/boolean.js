//Boolean:

let isAdmin = true;

let isChecked = false;

// Falsy values: false, undefined, null, 0, '' and NaN

let falsyValue_1 = false;

let falsyValue_2 = undefined;

console.log("falsyValue_2 ==> ", !!falsyValue_2); // falsyValue_2 ==>  false

let falsyValue_3 = null;

console.log("falsyValue_3 ==> ", !!falsyValue_3); // falsyValue_3 ==>  false

let falsyValue_4 = 0;

console.log("falsyValue_4 ==> ", !!falsyValue_4); // falsyValue_4 ==>  false

let falsyValue_5 = "";

console.log("falsyValue_5 ==> ", !!falsyValue_5); // falsyValue_5 ==>  false

let falsyValue_6 = NaN;

console.log("falsyValue_6 ==> ", !!falsyValue_6); // falsyValue_6 ==>  false
// ############################
console.log("====================================");
//###########################

// Truthy values

let age = 1;
console.log("age ==>  ", !!age); // age ==>   true

let str = " ";

console.log("str ==> ", !!str); // str ==>  true

// ############################
console.log("====================================");
//###########################

console.log("NaN ===> ", "A" * "Z"); // NaN ===>  NaN

// ############################
console.log("====================================");
//###########################

let ex_1 = "null"; //??

let ex_2 = "false";

console.log(!!Boolean(ex_2)); // ??

/*
let userName = null;

if (!!userName) {
  console.log(userName);
} else {
  console.log("Jon Do");
}
*/
