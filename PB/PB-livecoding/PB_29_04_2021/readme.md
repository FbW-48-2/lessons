# Callbak functions
![enter image description here](https://i.morioh.com/b195aa9d79.png)

## What are callbacks?

- A callback is a function that is to be executed after another function
- A way for one part of our program to communicate with another part, that it
has finished running.
example : 
```javascript
function getLanguage(callback) { 
callback(); 
}
 
function greeter() {
 
}

 getLanguage(greeter);

```
```javascript
function getLanguage(callback) { 
console.log("running getLanguage");

callback(); 
}
 
function greeter() {
 console.log("running greeter");

}

 getLanguage(greeter);

```

>  You can pass in information into a callback

```javascript
function getLanguage(callback) {
 
 console.log("running getLanguage");
 
 const language = "ENGLISH";
 
 callback(language);
 
 }
 
 function greeter(language) { 
 
  console.log("running greeter");
   
  if(language === "ENGLISH") { 
  
  console.log("Hello!"); 
  } 
 }

```
Summary
- A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete some kind of routine or action

- A function that accepts other functions as arguments is called a **higher-order function** which contains the logic for when the callback function gets executed.
- 
## why do we need callbacks
- Some code might take longer to run - for example, if
you need to contact a server
- Allows one part of the program to "wait" for another
part of our program
```javascript
function first(){  
  console.log(1);  
}
function second(){  
  console.log(2);  
}
first();  
second();
```

 if function `first` need more time to be executed For example, an API request where we have to send the request then wait for a response.
```javascript
function first(){  
  // Simulate a code delay  
  setTimeout( function(){  
    console.log(1);  
  }, 500 );    
}
function second(){  
  console.log(2);  
}
first();  
second();
// 2
// 1 
```
  **JavaScript didn’t wait for a response from** `first()` **before moving on to execute** `second()` 