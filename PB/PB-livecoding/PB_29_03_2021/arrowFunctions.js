// arrow function 
// 1. arrow function with return 
const getInfo = (name) => {
    return name;
} 

const getInfo2 = name => {  // if i have only one param 
    return name
}

const getInfo3 = name => name // short arrow function have return by default 
const getInfo4 = name => {
       let userAddress = 'Berlin';
       return `${name} , ${userAddress}`
     }

console.log(getInfo('Max'));
console.log(getInfo2('Max'));
console.log(getInfo3('Mo'));
console.log(getInfo4('Mo'));