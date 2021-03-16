console.log(Math.round(2.3)) // near to 2 
console.log(Math.round(2.9)) // near to 3 
console.log(Math.round(2.5)) // near to 3 

console.log()


console.log(parseInt(2.3)) // 2 
console.log(parseInt(2.9)) // 2 

console.log(Math.ceil(2.1))  // 3 
console.log(Math.ceil(2.9))  // 3 

// floor 
console.log(Math.floor(2.9999)) // 2 

console.log(Math.ceil(2.1)) // 3 


// square root 
console.log(Math.sqrt(36))
// 6 * 6 = 36 

// cube root 
console.log(Math.cbrt(27))
// 3 * 3 *3 = 27 

// power 
console.log(Math.pow(6,2))
// 6 * 6 = 36

// combining math methods 
// let num = Math.round(Math.sqrt(35));
// console.log(num)
console.log(Math.pow(6,3))
// 6 * 6 * 6 = 216

// abs 
console.log(Math.abs(-9))

// sign 
console.log(Math.sign(-50))
let num = -99;
if(Math.sign(num)=== -1){
    console.log('negative')
}

// Max 
// console.log(Math.max(1,2,3,88,9))
// // min 
// console.log(Math.min(1,2,3,88,9))
// // random 
let myRandom = Math.random();  // the range is from 0 to 1

myRandom = Math.round( Math.random()* 10 ) // changing the range form 0 to 10
// another option 
myRandom = Math.floor( Math.random()* 10+1 ) // changing the range from 0 to 10

console.log('random : ',myRandom);          

// NaN 
console.log( typeof NaN)
console.log(10 / 'a2');
console.log(Number('105A'))
console.log(100 + (0 / 0))
console.log('0 / 0 ',0 / 0)
console.log('1000/0', 1000/0 )
//infinity
console.log(Math.pow(10, 100))