// Map 
let numbers = [5 , 6 ,7, 8]; 

// add one to each element 

let result = numbers.map(function(item){
   console.log( item +1 );
   
    return item+1    
   
   
})
// console.log("numbers: ",numbers);
// console.log("result: ", result);

let tasks = ["learn array methods", "go running" , "learn react"]
let myTasks = tasks.map(function(item){
    return `<li> ${item} </li>`;
});
myTasks = tasks.map( item => `<li> ${item} </li>` );

//console.log(myTasks);

let arr = [
    { key : 1 , value :100},
    { key : 3 , value: 205 },
    { key :6,  value : 400}
];
let arr2 = [
    { id : 1 , price :100},
    { id : 3 , price: 205 },
    { id :6,  price : 400}
];

// expected : [ { '1' : 100 } , {  '3' : 205}  , { '6' : 400} ]
// let newArr = arr.map(function(item){
//     let obj = {}
//     obj[item.key] = item.value    // obj[1] = 100    {  '1' : 100 }
//     return obj
// });

// arrow function 
let newArr = arr.map((item)=>{
    let obj = {}
    obj[item.key] = item.value    // obj[1] = 100    {  '1' : 100 }
    return obj
});


console.log(arr);
console.log(newArr);

//##############################
// reformating a string using map function 
let str = "L 2 S 3 M 4 S 7"; // the original str
// expected result  "L 4 S 6 M 8 S 14";
//1- convert to array using split
//2- use map function => check if value === "L" or "S" or "M" then return the element else return item *2
//3- convert to a String using join(" "); 

let newStr = str.split(" ").map(function(element){
    if(element === "L" || element ==="S" || element==="M"){
        return element        
    }
    else return element * 2 

})
console.log(newStr.join(" "));
