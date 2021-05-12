### Array Method .map

#### 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

* That is: removes all dashes, each word after dash becomes uppercased.

Examples:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. You have an array of user objects, each one has name, surname and id.

* Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:
```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */


/* usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
``` 
* So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

