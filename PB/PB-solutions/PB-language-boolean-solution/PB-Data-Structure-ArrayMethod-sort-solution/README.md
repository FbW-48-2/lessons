### Array Method .sort

#### 1. Sort in decreasing order

```js 
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

console.log( arr ); // 8, 5, 2, 1, -10
``` 

#### 2. We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

* Create a function copySorted(arr) that returns such a copy.

```js
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)
```
