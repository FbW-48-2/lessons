# Functions
 

![enter image description here](https://blog.alexdevero.com/wp-content/uploads/2020/01/javascript-functions-all-you-need-to-know-pt.1.jpg)
## Advanced Parameters
**defaults params**

``` javascript
function  printMsg()
  {  
      let message = "Hello, I'm learning JavaScript!"; // local variable
      console.log( message );  
  }  
   printMsg();  // Hello, I'm learning JavaScript!
 
  
  function  printMsg2(msg)
  {  
       
      console.log( msg );  
  }  
   printMsg();  // Hello, I'm learning JavaScript!
   printMsg2('Hello');  // Hello
 
  
  ``` 
 
 

```javascript
function  printMsg3(msg)
  {  
       
      console.log( msg );  
  }  
    printMsg3();  // undefined
```

```javascript
function  printMsg4(msg = 'Good Morning')
  {  
       
      console.log( msg );  
  }  
    printMsg4();  // Good Morning
    printMsg4('Hello');  // Hello
```

 **Rest Paramaters**
 - Many JavaScript built-in functions support an arbitrary number of arguments.
 - A function can be called with any number of arguments, no matter how it is defined.
```javascript
function sum(a, b) {

return a + b;

}

console.log( sum(1, 2, 3, 4, 5) ); // 3

// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.
```
- The rest parameter can be mentioned in a function definition with three dots '...'. They literally mean “gather the remaining parameters into an array”.
```javascript

function sumA(...args) {

let sum = 0;

for (let i = 0; i < args.length; i++) {

sum += args[i];

}

console.log(args);

return sum;

}

console.log(sumA(1)); // 1

console.log(sumA(1, 2)); // 3

console.log(sumA(1, 2, 3)); // 6

console.log(sumA(1, 2, 5, 6, 2, 4, 5)); // 25
```
- We can choose to get the first parameters as variables, and gather only the rest.
- The rest parameters must be at the end.
```javascript
function showName(...titles, firstName, lastName) { 
} // SyntaxError: Rest parameter must be last formal parameter
```
```javascript
function showName(firstName, ...titles,  lastName) { 
} // SyntaxError: Rest parameter must be last formal parameter
```
- Here the first two arguments go into variables and the rest go into titles array:
 ```javascript
function showName(firstName, lastName, ...titles) {

console.log( firstName + ' ' + lastName ); // Julius Caesar

// the rest go into titles array

// i.e. titles = ["Consul", "Imperator"]

console.log( titles); // [ 'Consul', 'Imperator' ]

console.log( titles[0] ); // Consul

console.log( titles[1] ); // Imperator

console.log( titles.length ); // 2

}

showName("Julius", "Caesar", "Consul", "Imperator");
 ```
