## JavaScript Array Methods

![enter image description here](https://www.tutsmake.com/wp-content/uploads/2019/03/JavaScript-Array-Methods.jpeg)

## **forEach**
>The  **arr.forEach**  method allows to run a function for every element of the array.
```javascript
arr.forEach(function(item, index, array)  {  // ... do something with item  });
```
```javascript
const colors = ["red",  "green",  "yellor"]
colors.forEach((item, index, array)  =>  {  consle.log(`${item} is at index ${index} in ${array}`);  });

```
> there is no way to stop forEach loop 
> there is no returned value 
## **map**
- The map() method creates a new array with the results of calling a provided function on every element in the calling array.
- The arr.map method is one of the most useful and often used.
- It calls the function for each element of the array and returns the array of results.
 ```javascript
 // let result = arr.map(function(item, index, array) {

// // returns the new value instead of item

// })
 ```
 - When we need to iterate over an array – we can use forEach, for or for..of.
 - When we need to iterate and return the data for each element – we can use map.
  ```javascript
  let aRr = [1, 2, 3, 4, 5];

let squareArr = aRr.map(num => num ** 2);

console.log(squareArr); // [ 1, 4, 9, 16, 25 ]
// We wrote a function that returns the square of a number and passed that function as an argument to our map()
console.log(mapMethod()); // [ 2, 3, 4, 5 ]

console.log(numbers); // [ 4, 9, 16, 25 ]

 ```
 
  ```javascript
let numArr2 = [1, 4, 9];

// 1.

let doubles = numArr2.map(function(num) {

return num * 2;

})

console.log(doubles); // [ 2, 8, 18 ]

// 2.

let doubles2 = numArr2.map(num => num * 2)

console.log(doubles2); // [ 2, 8, 18 ]

console.log(numArr2); // [ 1, 4, 9 ]
  ```
  
