let persons = [];

class Person {
  constructor(name , address , job){
      this.name = name;
      this.address = address; 
      this.job = job;
     
      
  }
  add(){
      persons.push(this)
  }
   output(){
       console.log(this.name);
   }
  info(){
      this.output();
      return ` ${this.name} live in ${this.address} and work as ${this.job} `
  }
  changeAddress(address){
      this.address = address

  }
  greeting(){
      console.log(`Hello ${this.name}`);
  }
}
const person =  new Person("Sara" ,"Berlin" , "React developer")
const person2 = new Person("Max" , "New York" ,"UI Designer") 
person.info()
// console.log(  person ); // object 
// console.log(  person2 ); // object 
//person.changeAddress("London");

// console.log(person.info());
// console.log(person2.info());
// person.greeting()
// person2.greeting();

//  function makeClass(word) {
//      return class {
//          sayHi(){
//              console.log(word );
//          }
//      }
//  }

// let User3 = makeClass("Hello")
// let user3 = new User3
// user3.sayHi()
person.add();
person2.add()
console.log(persons);
