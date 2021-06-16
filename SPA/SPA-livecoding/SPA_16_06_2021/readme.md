
# async function
![enter image description here](https://habrastorage.org/getpro/habr/post_images/2c8/f4a/252/2c8f4a252d33ee663665fd7df02b45ed.jpg)
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

```javascript
// If you return a non-promise value from an async function,

// JavaScript will automatically wrap it into a promise.

async function greet() {

return 'Hello World';
}

```
The word “async” before a function means : a function always returns a promise. Other values are wrapped in a resolved promise automatically.
```javascript
console.log(greet().then()); // Hello World
```
this function returns a resolved promise with the result of Hello World.
…We could  return a promise, which would be the same:
```javascript
// If you return a promise from an async function,

// JavaScript will not make any transformations on it.

async function greet() {

return new Promise((resolve, reject) => {

resolve('Hello World');

});

}

console.log(greet().then());
```

// you can also return a rejected promise from this function.
```javascript
async function greet() {

return new Promise((resolve, reject) => {

reject('404 not found');

});

}
```
So, `async` ensures that the function returns a promise, and wraps non-promises in it.

# await keyword

first of all `await` works only inside `async` functions,

The keyword  `await`  makes JavaScript wait until that promise settles and returns its result.
here is an example with a promise that resolves in 2 seconds:

```javascript
async function myFunc() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

myFunc();
```
and here is the same without `async`  `await`
```javascript
 function myFunc() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });

return promise

 
}

myFunc().then(msg=> {  console.log(msg) });
```
we can use  `async`  `await` with `fetch `
```javascript

// Function using promise like syntax (.then)

function getRandomDogImage() {

fetch('https://dog.ceo/api/breeds/image/random')

.then(response => response.json())

.then(value => console.log(value.message));

}

// The same function using async await syntax

async function getRandomDogImage() {

let response = await fetch('https://dog.ceo/api/breeds/image/random');

value = await response.json();

console.log(value.message);

}
```