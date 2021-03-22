# True or False? 


#### 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
**Questions: Comment your answers in the js file.** 
* Is there a difference? Why/why not? 
* Which comparison operator should we generally use? Why?
* What would happen if we were to use `=`?

#### 2. Not
* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

#### 3. Short Circuit
Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
```