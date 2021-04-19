## JavaScript objects

![enter image description here](http://www.greenstechnologys.com/images/java-script.jpeg)
 
Objects are used to represent a “thing” our code. That could be a person, a car, a building, a book, a character in a game .
 basically anything that is made up or can be defined by a set of properties  ( key , value ).
```javascript
//  object syntax
var object = {
  key: 'value'
};

// Example 'person' object
var person = {
  name: 'Max',
  age: 35,
  likesCode: true
};

```
> objects have no length, no index.
>Properties in objects can be accessed, added, changed, and removed by using either **dot** or **bracket** notation. To get the value of the age key in our person object with both dot and bracket notation, we’d write:
```javascript
 
// Dot notation
console.log(person.age) // returns 35
 
// Bracket notation
console.log(person['age']) // returns 35
```

- to change the value of likesCode to **false**. We can do that with dot notation like this:
```javascript
 
person.likesCode = false;
  
```
- if we wanted to add a new property to our person object, we could accomplish that with dot notation as well:

```javascript
person.hobbies = ['hiking', 'travel', 'reading'];
```
- to remove a property from an object, we use the delete keyword
```javascript
delete person.age;
```
###  Object to Array
```javascript
/*****************************************************************************
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the object 
******************************************************************************/

```

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--rJeH0yGE--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/t52ni02srb8688lh3eh8.png)

## Object Method
- A method is a function stored as a property.
```javascript
const newObj = {

hello: "World",

123: 456,

myFunction: function() { // method

console.log("Hello world!");

}

};

```
```javascript
// Object // function called max.... => "METHOD"
Math.max(1, 2, 3); // => REAL LIFE EXAMPLE
Math.min(1, 2, 3); // many math methods in one object at the same time!
```
- this keyword
```javascript
const objectLiteral = {

property: "hello world",

key: "Dumplings",

method: function () {

console.log("Good Morning " + this.key);

}

};
```
```javascript
// Other Methods we already used
// Object.keys()

// Object.values()

// Object.entries()

```
```javascript
const person = {

firstName: "John",

lastName : "Doe",

id : 5566,

fullName() {

return `${this.firstName} ${this.lastName}`;

}

};

console.log(person.fullName()); // John Doe
```
