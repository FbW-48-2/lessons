// let arr = [1,2,3];
// let newArr = [...arr];
// arr.push(5)


// let newObj = {...obj}
// obj.age = 35 
// console.log("obj" , obj);
// console.log("newObj" , newObj);

// let newObj2 = Object.assign({} , obj)
// obj.city = "berlin"
// console.log("obj" , obj);
// console.log("newObj2" , newObj2);
// let obj = { name:"Max" , id:33 , address:{ street:"str"  } }

// let newObj3 = JSON.parse( JSON.stringify(obj) );
// obj.address.city= "Berlin"
// console.log("obj",obj);
// console.log("newObj3" ,newObj3);

let arr1 = [1,3];
let newArr = Object.assign([] , arr1);

arr1.push(55)
console.log("arr1" ,  arr1);
console.log("newArr" ,  newArr);