/*
Data Types: An introduction
- Primitive Data Types: Numbers, Strings, Boolean, Null and Undefined
- Empty variables: `null` vs. `undefined`.
- Objects: Arrays and Objects
- Data type: the unary operator `typeof`
*/

//!Primitive Data Types: Numbers, Strings, Boolean, Null and Undefined

//1- Number ==> float and integer
let intNumber = 100
let floatNumber = 5.44
let num = 44  

console.log(intNumber);
/* ################ */
//2- String

let str_1 = 'hallo world'
let str_2 = "I like Js"
let num2 = '44'

console.log(str_2)

/** ############ */
//3- Boolean ==> true or false

let isAdmin = true
let isOpen = false

/** ############# */

//4 - Null ==> empty 

let name = null

console.log(name);
/** ############# */
//5- Undefined ==> undefined

let und = undefined

console.log(und)

/** ############# */
//6- Array ==> [item_1, item_2,...] ==> complex ??
let arrOfNames = ['Alex','Jon',100,null,undefined, name]

console.log(arrOfNames)
/**
 [ 'Alex', 'Jon', 100, null, undefined, null ]
 */


/** ############# */
//7- Object ==> { key: value} ==> complex ??

let person = { name:'Max', age:30}


/** ###################### */

console.log(typeof 100) // number
console.log(person); // { name: 'Max', age: 30 }
console.log(typeof person); // object

console.log(person.name) // Max
/*
let userName; 
userName = 'Alex'
userName = "Max"
console.log(typeof  num  );
console.log(typeof num2  );
console.log(userName);
*/




