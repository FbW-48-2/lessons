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
console.log(Math.max(1,2,3,88,9))
// min 
console.log(Math.min(1,2,3,88,9))
// random 