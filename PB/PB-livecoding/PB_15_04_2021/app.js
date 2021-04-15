// let a = 50 ; 
// let b = a ; 
// console.log('a = ', a);
// a = 40;
// console.log('a = ', a);
// console.log('b = ', b);

// let user = {  name :"Max" , age:35} 
// let user2 = user ;
// console.log('user:',user);
// user.name = 'Anna';


// console.log('user:',user);
// console.log('user2:',user2);

// let arr = ['a' , 'b'];
// let arr2 = arr;
// arr.push('c')
// console.log('arr: ',arr );
// console.log('arr2: ',arr2 );

// let user = { name:"John" , age : 35}
// let user2 = user
// delete user.name;
// delete user.age;


// user.isAdmin = true;
// user["home address"] = "Berlin ";
 
// console.log(user);

// console.log(user2);


// let person = { name :"Alex" , job :"Backend developer"};
// let person2 = person; 

// person2.name ="Adam" 
// person2.age = 35; //added new property 

// console.log("person : ",person);
// console.log("person2 : ",person2);

//##############################################
// let fruit = 'kiwi';
// let fruit2 = "Apple"

// let fruitBucket  = {
//     [fruit] :'5'   // computed property
// }

// console.log(fruitBucket);


// let food = {
//     [fruit+"Banana" + fruit2] : 6  // computed 
//     // kiwiBananaApple: 6 
// }

// console.log(food.kiwiBananaApple);
// ####################################################

// objects with keys as numbers 
// let colors = {
//     0 : "green",    
   
    
//     favColor : "Magenta",
//     1 : "red",
//     3 : "yellow",
// }
// console.log(colors[3],colors[1] , colors["favColor"]);
// console.log(colors.length); // undefuned 

// let user = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// console.log(user.data[1].email);

let personA = {

    name:{
        firstName : "Max",
        lastName : "Doe"
    },
    age : 35,
    address:{
        city: "Berlin",
        street : "volkanStr",
        country: "Germany"
    },
    companieWorkedWith: {
        name :"Google",
        dutration:" 3 years",
        job:"frontend developer"
    },
    experiences: [
        {
            company :"google",
            dutration:"3 years",
            job:"frontend developer"
        },
        {
            company :"facebook",
            dutration:"2 years",
            job:"react developer"
        },
        {
            company :"Amazon",
            dutration:"1 year",
            job:"frontend developer"
        }

    ]
}

// console.log(personA.name.firstName);
// console.log(personA.experiences);

let arr = personA.experiences; // experiences 

// for(let i = 0 ; i < arr.length ; i++ ){
//     console.log(arr[i].company , arr[i].dutration, arr[i].job);
// }

// let personB = {
//     age : 35
// }
// console.log(personA.age === personB.age);
//########################################################
// write a function to generate an object 

function createUser(firstName , lastName ){

    return {
        firstName ,
        lastName 
    }
}

// console.log(createUser("Max" , "Doe"));

let name = "Alex" ;
let age = 33;
let personC = { name, age}

// add new property to the object : info
personC.info = function (){ return personC.name +" "+  personC.age }
// console.log(personC);
// console.log(personC.info());


// console.log(personC.address === undefined); 
//#################################################################

// Object.keys ==> array from the keys 
console.log(Object.keys(personA));
console.log(Object.keys(personA).length);

// access the nested object keys of address 
console.log(Object.keys(personA.address));

// Object.values ==> values of my object 

console.log(Object.values(personA.address));


console.log(Object.keys(personA.experiences[0])); // the keys of the first experinces 
console.log(Object.values(personA.experiences[0]));

console.log('age' in personA); // TRUE

const ageArray = Object.keys(personA.age) // empty array personA.age is not an object 
console.log(ageArray); // [] 

const addressArray = Object.keys(personA.address)
console.log(addressArray);  // [ 'city', 'street', 'country' ]

console.log(typeof  personA.address);

// Object.entries
//console.log(Object.entries(personC));
const entries = Object.entries(personA);
console.log(entries[4][1][0].company);
console.log(entries[2]);

//###############################################################