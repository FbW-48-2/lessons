// Destructuring Assignment

// Array
let colors = ["red","darkOrange"];
// let color1 = colors[0]
// let color2 = colors[1]

// let [color1,color2  ] = colors
// console.log(color1 , color2  );

let numbers = [ 33,4,5,6]
let [num1,,,num2] = numbers;
//console.log(num1 , num2);

// String 
let str = "javascript is great";
let[c1,c2,c3] = str;
//console.log(  c1 , c2 , c3);


let countries = ["Germany", "Spain"];
let cities = ["Berlin", "barcelona"];
let array = [...countries , ...cities];
//console.log(array);

// Object 
let obj = {};
let str1 = "John Smith";
[obj.name , obj.lastName ] =           str1.split(" "); //["John" "Smith"]
obj.name = "John Smith".split(" ")[0]
obj.lastName = "John Smith".split(" ")[1]
//console.log(obj); { name: 'John', lastName: 'Smith' }

let user = { name:"Max" , age : 35 ,city : "Berlin" };

let {  age , city , name } = user ; // 3 new variables

// let a = user.age;
let c = user.city;
let n = user.name 

console.log(  name ,   age ,   city );
/////////////////////////////////7777777777
  //let k , l , m;

 // ({ k , l , ...m} = {  k :10 , l:44 , m:33 ,o :44, p:77}  )

 let { k , l , ...m} = {  k :10 , l:44 , m:33 ,o :44, p:77}

console.log(m); //{ m: 33, o: 44, p: 77 }
console.log( k , l   ); // 10 44

 
// let nums = {  k :10 , l:44 , m:33}
// let { k, l ,m } = nums

// let job ="React developer"
// let id = 522;
// let myObject = { job , id }
// console.log(myObject);


let numbersArr = [2,3,4]

console.log(Math.max(2,3,4));
console.log(Math.max(...numbersArr));
console.log(...numbersArr);