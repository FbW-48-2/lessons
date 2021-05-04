
# Constructor, operator "new"

![enter image description here](https://i.ytimg.com/vi/_NM5tRMP0Ss/hqdefault.jpg)


_The  `{ }` syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on._
_That can be done using constructor functions and the `"new"` operator._
```js
// here we created an object using the object constructor 
let  person = new  Object(); 
// or 
let  person = { } 

```
## What is Constructor function ?
Constructor functions technically are regular functions but : 
1. They are named with capital letter first.
2. They should be executed only with `"new"` operator.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Max");

console.log(user.name); // Max
console.log(user.isAdmin); // false
```
_When a function is executed with `new`, it does the following steps:_
1. A new empty object is created and assigned to `this`.
2. The function body executes. Usually it modifies `this`, adds new properties to it.
3. The value of `this` is returned.

```javascript
function User(name) {
  // this = {};  

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;   
}
```
So `let user = new User("Max")` gives the same result as:
```javascript
let user = {
  name: "MAx",
  isAdmin: false
};
```
Now if we want to create other users, we can call `new User("Alex")`, `new User("Sara")` and so on.  Shorter than using { }  every time, and also easy to read.
Constructor function implement reusable object creation code.
we can write also : 
 
 ```javascript
let user = new function() {
  this.name = "Max";
  this.isAdmin = false;   
};
```
 
 The constructor can’t be called again, because it is not saved anywhere, just created and called. 
 ## Return from constructors
 Usually, constructors do not have a `return` statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result.
 But if there is a `return` statement, then the rule is simple:

-   If `return` is called with an object, then the object is returned instead of `this`.
-   If `return` is called with a primitive, it’s ignored.
```javascript
function BigUser() {

  this.name = "John";

  return { name: "Sara" };  // <-- returns this object
}

console.log( new BigUser().name );  // Sara 
```
And here’s an example with an empty `return`
```javascript
function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

console.log( new SmallUser().name );  // John
```
##  Methods in constructor 
```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John


```