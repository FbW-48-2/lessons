
# Closure in Javascript
![enter image description here](https://www.thecreativedev.com/wp-content/uploads/2017/05/javascript-closure.png)
## What is closure?

_Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned._

if we create a nested function, the inner function can access variables and parameters of an outer function
example : 
```javascript
 
function OuterFunction() {

    let outerVariable = 1;

    function InnerFunction() {
        console.log(outerVariable);
    }

    InnerFunction();
}
OuterFunction() // 1 
```

```javascript
 
function OuterFunction() {

    let outerVariable = 100;

    function InnerFunction() {
        console.log(outerVariable);
    }

    return InnerFunction;
}
let innerFunc = OuterFunction();

innerFunc(); // 100
// InnerFunction() can access outerVariable even if it will be executed separately
 ```
```javascript
 
function counterFun() {
    let counter = 0;

    function increaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

let count = counterFun();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4

```
> Closure is valid in multiple levels of inner functions
- A colsure is always a nested function
```javascript 
  let myVar = "I am global";

  function outerFunction(){

  console.log(myVar);

  }
  outerFunction() // I am global
```
```javascript 
let myVar = "I am global";

function outerFunction(){

let myVar = "I am just a local scope!"

let innerFunction = function() {

return console.log(myVar);

}

return innerFunction;
outerFunction()(); // // I am just a local scope! 

}
``` 
```javascript 
function makeAdder(x) {

// parameter `x` is an inner variable

// inner function `add()` uses `x`, so

// it has a "closure" over it

function add(y) {

return y + x;

};

return add;

}
let plusOne = makeAdder( 1 )
// `plusOne` gets a reference to the inner `add(..)`

// function with closure over the `x` parameter of

// the outer `makeAdder(..)`
let plusTen = makeAdder( 10 );
// `plusTen` gets a reference to the inner `add(..)`

// function with closure over the `x` parameter of

// the outer `makeAdder(..)`

plusOne( 3 ); // 4 <-- 1 + 3

plusOne( 41 ); // 42 <-- 1 + 41

plusTen( 13 ); // 23 <-- 10 + 13
``` 
```javascript 
function init() {

let name = "Mozilla"; // name is a local variable created by init

function displayName() { // displayName() is the inner function, a closure

console.log(name); // displayName() uses variable declared in the parent function

}

displayName();

}

init();
``` 
```javascript 
function makeTitler(x) {

function title(y) {

return `${x} ${y}`;

};

return title;

}
let mrTitle = makeTitler("Mr.");

let msTitle = makeTitler("Ms.");

msTitle("Lara");

mrTitle("David");

makeTitler("Dr.")("John");

makeTitler("Prof.")("John");
``` 
>Closure is useful  to create private variables or functions.
# Recursion in Javascript
![enter image description here](https://miro.medium.com/max/2560/1*wnPcCpnb0ttOi61niPyvTA.jpeg)

_The function calls itself until someone stops it._
_**Recursion** is when a function calls itself until someone stops it. If no one stops it then it'll **recurse** (call itself) forever._
 

Recursive functions let you perform a unit of work multiple times. This is exactly what `for/while` loops let us accomplish! Sometimes, however, recursive solutions are a more elegant approach to solving a problem._

in other words recursion is : 
1. repetitive
2. it takes a modified copy of the original Data
3. it has an exit or termination condition

```javascript 
// countdown

let counter = 10;

while(counter > 0) {

console.log(counter--);

}
``` 

```javascript 
// recursive contdown function

let countdown = function(value) {

if (value > 0) {

console.log(value);

return countdown(value - 1);

} else {

return value;

}

};

(countdown(10));

// 10

// 9

// 8

// 7

// 6

// 5

// 4

// 3

// 2

// 1
 
```  
```javascript 
// factorial

let factor = function(number) {

let result = 1;

let count;

for (count = number; count > 1; count--) {

result *= count;

}

return result;

};
console.log(factor(6)); // 720
```  

```javascript 
// recursive factorial function

let factorial = function(number) {

if (number <= 0) { // terminal case

return 1;

} else { // block to execute

return (number * factorial(number - 1));

}

};

console.log(factorial(6)); // 720
``` 
## Infinite Recursion

Recursion have the Infinite loop danger. It's not hard to write a self-referencing function that'll crash your browser.
```js
//THIS RUNS FOREVER
function start() {
    console.log('starting..');
    starting();
}

starting();
// starting..
// starting..
// ...

```

### Base case

This is known as the **base case**–our recursive `factorial` had one.
```js
if (number <= 0) { // terminal case

return 

}
``` 
 
## Summary
- _Recursion is when a function calls itself until someone stops it_
- _It can be used instead of a loop._
- _If no one stops it, it'll recurse forever and crash your program._
- _A **base case** is a condition that stops the recursion. Don't forget to add them!_ 
- _Loops use extra state variables for tracking and counting, while recursion only uses the provided parameters._
