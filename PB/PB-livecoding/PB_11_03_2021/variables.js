// var let const 

/* var name = "Max";
name = "Alex Smith";
var age = 22;
var firstName = "Sara";
var name1= 'Ami';
var $name = "abc";
var _name = "Edwin";
var last_name ='Doe'
console.log(name);
console.log(name + " "+ age )
console.log(name , age)
console.log(name , age, 'asdas')
console.log(age); */


// let 
// let firstName = "John"  // camel case 
// let lastName = "Doe";
// let BirthDate = '01.01.1980';  // pascal case 
// let user_name = "john.doe"; // underscore case 

// //let address = "Berlin";
// let address;

// address = 'Berlin'
 
// console.log( "the type of address is " + typeof address)
// console.log("the value of address is  " + address);

// console.log( " my name is " + firstName +" "+ lastName + " and i'm living in "+ address)
// console.log( ' my name is ' + firstName +' '+ lastName + ' and i"m living in '+ address)

// const 
// const need to be assigned to a value in one statment
// can't reassign

const userName  = 'Max';

const visitors = 100 ;

const greetingMessage = 'Good Morning'

const colors = ['red' , 'blue', 'yellow'] ;
// add the braun color to the array 
//colors = ['red' , 'blue', 'yellow', 'braun'] ; // wrong
colors.push('braun')

const car = {

    color : 'black',
    name: 'BMW',
    model :'x1'

}
// car = {
//     color : 'red',
//     name: 'BMW',
//     model :'x1'
// }

car.color = 'red';
car.name = 'ford';
car.model = 'galaxy'


const person = {} ; 
//person = {  name: 'Max' , address : 'Berlin'   } // wrong
person.name = 'Max';
person.address = 'Berlin'


console.log(typeof person);
console.log(person);
console.log(car);
console.log(visitors) 
console.log(userName);
console.log(colors)
