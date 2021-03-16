
#  Type Conversion Numbers, String
![enter image description here](https://i.morioh.com/2019/11/06/283054389f9b.jpg)
 

  
  
 
```javascript
let val;

// Number to string
val = String(777);
val = String(4+4);
// Bool to string
val = String(false);
// Date to string
val = String(new Date());
// Array to string
val = String([1,9,2,10]);

// toString()
val = (6).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('50.20');
val = parseFloat('50.20');

// Output
 console.log(val);
 console.log(typeof val);
 console.log(val.length);
 console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
```
 
 ![enter image description here](https://cdn.educba.com/academy/wp-content/uploads/2019/06/JavaScript-Math-Functions.jpg)
 
  

The JavaScript math object provides several constants and methods to perform mathematical operation
------------------------------------------------------------------------

```javascript
const num1 = 100;
const num2 = 50;
let result;

// Simple math with numbers

result = num1 + num2;
result = num1 * num2;
result = num1 - num2;
result = num1 / num2;
result = num1 % num2;


// Math Object


// console.log(Math);

// Props
result = Math.PI;
result = Math.E;

//methods () :
result = Math.round(2.4);
// expected output : 2
```

**ceil**
It returns a smallest integer value, greater than or equal to the given number.
```javascript

result = Math.ceil(2.0001);
// expected output : 3
```
**floor**
returns the lowest integer for the given number.
```javascript
result = Math.floor(2.99999);
// expected output : 2
```
**sqrt**
It returns the square root of the given number
```javascript

result = Math.sqrt(64);
// expected output : 8
```
**pow**
returns the m to the power of n that is mn.
```javascript
result = Math.pow(8, 3);
// expected output : 512
```
**abs**
returns the absolute value for the given number. For example 4 for -4, 6.6 for -6.6 etc.
```javascript
result = Math.abs(-10);
// expected output : 10
```
**sign**
returns the sign of the number. It indicates whether the given number is positive, negative or zero
```javascript
result = Math.sign(-10);
// expected output : -1
```
**max**
It returns maximum value of the given numbers.

```javascript
result = Math.max(-10,4,1,800);
// expected output : 800
```
**min**
It returns minimum value of the given numbers.
```javascript
result = Math.min(-12,-10,4,1,800);
// expected output : -12
```
**random**
It returns random number between 0 
```javascript
result = Math.random();
// expected output : random number between 0 and 1
```
```javascript
result = Math.abs(Math.ceil(Math.random()*100 +1));
// change the range of the random numbers

console.log(result);
```
#**NaN**

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--CiGQ2X_E--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/52tp5wgf1vmiw22psbff.png)

## NaN is a special value representing Not-a-Number.

### The `NaN` has the type number
```javascript
console.log(typeof NaN); // number
```
### Checking if a value is NaN
the function `isNaN()`  returns true if its argument is `NaN`
```javascript
isNaN(valueToCheck)
```
```javascript
const result = 100 + 0 / 0;
console.log(isNaN(result)); // true

```
example 
```javascript
const input = '100';
const num = parseInt(input);

console.log(num); // 100
```
>If JavaScript cannot convert a string to a number, it returns NaN. In this case, NaN indicates that the parsing has failed
```javascript
const input = 'X100';
const num = parseInt(input);

console.log(num); // NaN
```
### infinity 
>Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

We can get it as a result of division by zero:
```javascript
console.log( 1 / 0 ); // Infinity
```
Or just reference it directly:
```javascript
console.log( Infinty ); // Infinity
```
or with big numbers
```javascript
console.log( Math.pow(10, 1000) ); // Infinity
```



