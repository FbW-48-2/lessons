let name = "Mo";
let newName = name;
newName = "John"
// console.log("name: " , name);
// console.log("newName: " , newName);

// objects && arrays copy by reference 
let arr1 = [1,2,3];
let arr2 = arr1
arr2.push(5)
// console.log("arr1", arr1 );
// console.log("arr2", arr2 );

let arr3 = [1,2,3];
let arr4 = arr3
//console.log(arr3 === arr4);

let obj1 = {id:3};
let obj2 =  obj1;
obj2.name ="Max";

// console.log("obj1 =", obj1);
// console.log("obj2 =", obj2);
// console.log( obj1 === obj2);

let user = {
    name:"Anna",
    email:"anna@gmail.com",
    address:"Berlin"
}
let copy = {name : "Max"};

copy.name = "John"; // dot notation 
copy.age = 30  // dot notation

copy["name"] = "Adam"; // bracket notation
copy["age"] = 35

//console.log("old", copy);

for(let key in user){
    copy[key]  = user[key] // value
}

// for(let key in user){
//     copy[user[key]] = key
// //  copy["anna@gmail.com"]  = "email" 
// }
//console.log("new ",copy);

//################################################################

// Object.assign 
//Object.assign(obj,obj1)
let carOne = {
    name:"BMW",
    model:"X5"
}
let car = {};
Object.assign(car ,carOne)
//console.log(car);

//Object.assign(obj,obj1,obj2,obj3)
let destination = {}
 
let source1 = { name : "Sara"};
let source2 = { age : 30};
let source3 = { address : "Hamburg"};
Object.assign(destination,source1,source2,source3);
console.log(destination);

let clone = Object.assign({},source1, source2,source3);

console.log(clone , source1);

