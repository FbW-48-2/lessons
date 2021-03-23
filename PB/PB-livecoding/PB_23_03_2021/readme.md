 ## Algorithms and Flow Control



## switch statement

- switch statement can replace multiple if
-  used to compare a value with multiple variants.
- the keywords are : `switch`,`case`,`break` and `default`
- The switch has one or more case and optional default

example : 
```javascript
 // check what month do we have?

// January = 1

// February = 2

// March = 3

// ... 12 cases...
```
```javascript
let month = 13;

// what month is this? Print it to the console as a word!

if (month === 1) {

console.log("Its January!");

} else if (month === 2) {

console.log("Its February");

} else if (month === 3) {

console.log("Its March");

} else if (month === 4) {

console.log("Its April");

} else if (month === 5) {

console.log("Its May");

} else if (month === 6) {

console.log("Its June");

} else if (month === 7) {

console.log("Its July");

} else if (month === 8) {

console.log("Its August");

} else if (month === 9) {

console.log("Its September");

} else if (month === 10) {

console.log("Its October");

} else if (month === 11) {

console.log("Its November");

} else if (month === 12) {

console.log("Its December");

} else {

console.log("Error cases!!!"); // 13

}
```
```javascript
// ...

// too much to code

// how can we make it simpler?

// a different approach

// SWITCH CASE

// for easy comparisons

// check for EQUALITY

// cannot check for bigger than // smaller than
```
 ```javascript
 switch (month) {

case 1:

console.log("Its January!");

break; // MUST HAVE FOR ALL THE CASES NORMALLY

case 2:

console.log("Its February");

break;

case 3:

console.log("Its March");

break;

case 4:

console.log("Its April");

break;

case 5:

console.log("Its May");

break;

case 6:

console.log("Its June!");

break;

case 7:

console.log("Its July");

break;

case 8:

console.log("Its August");

break;

case 9:

console.log("Its September");

break;

case 10:

console.log("Its October");

break;

case 11:

console.log("Its November");

break;

case 12:

console.log("Its December");

break;

default: // standard case, backup, it MUST be there, should be at the end!

console.log("Its an error case! Something went wrong"); // 13

// doesn't need a break because its the last one!

}
 ```
## LOOPS
# The “for” loop
The  `for`  loop is the most commonly used loop.

It looks like this:

```javascript
for (start; condition; step) {
  // ... loop body ...
}
```
as example 
```javascript
for (let i = 0 ; i < 10; i++) {
  console.log('Numbrer '+ i);
}
```

|part|||
|--|--|--|
|start|`i = 0`|Executes once upon entering the loop.|
|condition|`i < 10`|Checked before every loop iteration. If false, the loop stops.|
|body|`console.log('Numbrer '+ i);`|Runs again and again while the condition is truthy.|
|step|`i++`|Executes after the body on each iteration.

 


or 
```javascript
for (let i = 100; i > 0; i--) {
   console.log('Numbrer '+ i);
}
```
The general loop algorithm works like this:
```none
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```
Here’s exactly what happens in our case:
```javascript
// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// ...finish, because now i == 3
```

how to stop the loop

 - **continue**
it doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

```javascript
for(let  i = 0; i < 10; i++){

	if(i === 2){
	console.log('2 is my favorite number');
	continue;
	}
 
console.log ('Number '+ i);
}
```

 
 - **Break**
Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special  `break`  directive.
```javascript
for(let  i = 0; i < 10; i++){

	if(i === 5){
          console.log('Stop the loop');
          break;
        }
	
 
console.log('Number '+ i);
}
```
### while loop
The `while` loop has the following syntax:
```javascript
while (condition) {
  // code
  //  "loop body"
}
```
While the  `condition`  is truthy, the  `code`  from the loop body is executed.

For instance, the loop below outputs  `i`  while  `i < 3`:
```javascript

let i = 0;

 while(i < 10){
   console.log('Number ' + i);
   i++;
 }

```

### forEach loop
The [arr.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method allows to run a function for every element of the array.
```javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```
```javascript
// for each element call console.log
["Daniel", "Sara", "Nazgul"].forEach(console.log('Hi'));
```
```javascript
["Daniel", "Sara", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```
The result of the function (if it returns any) is thrown away and ignored.

### for...in Loop
The `for-in` loop is a special type of a loop that iterates over the properties of an object or the elements of an array. The generic syntax of the `for-in` loop is:
```javascript

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```
```javascript
// An object with some properties 
const person = {"name": "Sara", "lastName": "Smith", "age": "37"};
 
// Loop through all the properties in the object  
for(let prop in person) {  
    console.log(prop + " = " + person[prop]); 
}
```

```javascript
// An array with some elements
const fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Loop through all the elements in the array 
for(let i in fruits) {  
    console.log(fruits[i] );
}
```
