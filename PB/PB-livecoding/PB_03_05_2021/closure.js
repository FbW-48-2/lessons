// global scope 

// let msg = "Hello"

// function showMsg(){
//     let msg = " Hi "   // local scope 
//    console.log(msg);
// }
// showMsg();

// console.log(msg);

function outerFunction(){
   let value = 1 ; // global scope  for innerFunction
   let value2 = 2;
    function innerFunction(){
        console.log(value);

        function innerFunction2(){
          console.log(value2);
        }
        return innerFunction2
    }
    //innerFunction()
   return innerFunction
}
 
console.log(outerFunction());
// let inner = outerFunction();
// let inner2 =  inner()
// inner2()

// another way to do that 
//outerFunction()()()

//#############################################################

function counterFun() {
  let counter = 0;

    function increaseCounter() {
        return counter += 1;
    };

    return increaseCounter;
}
 
let count = counterFun() ;
//console.log(counter);
//console.log(typeof count , count);
// console.log(count()); // 1 
// console.log(count()); // 2 
// console.log(count()); // 3 

// console.log(counterFun()()); // 1 
// console.log(counterFun()()); // 1 

//#########################################################

let myVar = "I am global";

function outerFunction(){

let myVar = "I am just a local scope!"

let innerFunction = function() {

return console.log(myVar);

}

return innerFunction;
}
//outerFunction()(); // // I am just a local scope! 

//###########################################################

function makeAdder(x) {

    // parameter `x` is an inner variable
    
    // inner function `add()` uses `x`, so
    
    // it has a "closure" over it
    
    function add(y) {
    
    return y + x;
    
    };
    
    return add;
    
    }

// let plusOne = makeAdder(1);
// console.log(plusOne(4));  // plusOne = add 
// console.log(plusOne(9));

// let plusTen = makeAdder(10) ; // plusTen = add 
// console.log(plusTen(5)); // 15 
// console.log(plusTen(10)); // 20

// console.log(makeAdder(2)(4)); // 6 
// console.log(makeAdder(1)(1)); // 2

// #############################################

function init() {

    let name = "Mozilla"; // name is a local variable created by init
    
    function displayName() { // displayName() is the inner function, a closure
    
     console.log(name); // displayName() uses variable declared in the parent function
       function displayVersion(){
           let version = "88.0";
           console.log('version: ',version);
       }
       return displayVersion
    
    }
    
     return displayName;
    
    }
    
    init()()();

//############################################################

