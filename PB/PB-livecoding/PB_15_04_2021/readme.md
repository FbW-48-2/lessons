## JavaScript Value vs Reference Types
In JavaScript we have types that are copied by value and types copied by reference. These are :

**Primitives (copied by value)**

-  Number
-  String 
-  Boolean
-  null
-  undefined
-  Symbol

**Objects (copied by reference)**

-   Object
-   Array
-   Function


###  Primitives
```javascript
let a = 10;
let b = a;
a = 20; console.log(a); // 20  
console.log(b); // 10  this is also true for string, boolean, null, undefined
```
When we assign primitives to the variable, we  **copy the value**.

### Objects
```javascript 
let a = { value : 40};  
let b = a;
a.value = 50 ;console.log(a); // { value: 50}  
console.log(b); // { value: 50}
```

This is also true for  **Arrays**
```javascript
let a = [];  
let b = a;
a.push(5);console.log(a); // [5]  
console.log(b); // [5]  
console.log(a === b); // true
```
	

![enter image description here](http://www.greenstechnologys.com/images/java-script.jpeg)
## A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.

### creating an object  
- object literal syntax
```javascript
let user = { // an object

name: "John", // by key "name" store value "John"

age: 30, // by key "age" store value 30

};
```
- object constructor" syntax
 ```javascript
let user = new Object();
```
### updating an object  
- dot notation
 ```javascript
user.isAdmin = true;

console.log(user); // { name: 'John', age: 30, isAdmin: true }
```
- objects are mutable
 ```javascript
delete user.age;

console.log(user); // { name: 'John', isAdmin: true }
 ```
  ```javascript
 let user2 = {

name: "John",

age: 30,

"likes birds": true // multi word property name must be quoted

};
 ``` 
- bracket notation
  
```javascript
   
// For multiword properties, the dot access doesn’t work: user.likes birds = true
 ```
   ```javascript
   let user3 = {};

// set

user3["likes birds"] = true;
    ```
