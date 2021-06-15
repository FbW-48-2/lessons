
import {jsonData}  from './data.js';
let person = {
    name: "Max",
    email:"max@yahoo.com",
    age:3
}


console.log(typeof person);

// JSON.stringify

// console.log(typeof JSON.stringify(person));

// const str = JSON.stringify(person);
// console.log(str.length);
// console.log(str.name); /// undefined

// JSON.parse
// console.log(JSON.parse(str));
// const obj = JSON.parse(str);
// console.log(obj.name); // Max

// import json data 

// console.log(data.posts.length);


console.log('type from data.js : ', typeof jsonData);

const myData = JSON.parse(jsonData)

console.log('type after JSON.pase : ',typeof myData);

const user = { id : 1 , name:"John"} // object
const jsonUser =  { "id" : 1 , "name":"John"} // object valid as json
const jsonUserStr = '{ id : 1 , "name":"John"}' // json as string 

console.log(typeof user , typeof jsonUser , typeof jsonUserStr);
//console.log(JSON.parse(jsonUserStr).name);

// trycatch 
try {
    console.log(JSON.parse(jsonUserStr).name);
    
} catch (err) {
    console.log('we have ab error : ',err);
    
    
}
console.log(" one more block of code ");


// render json data to browser 
// myData
//console.log(myData.posts[0]);

const ul = document.createElement('ul');
document.body.appendChild(ul);
myData.posts.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item.title;
    ul.appendChild(li)
});



