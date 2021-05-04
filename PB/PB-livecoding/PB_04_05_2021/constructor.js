// let person = new Object({ name : "Alex"})
// let arr =  new Array(1,2,3)
// let str =  new String("abc")
// let num =  new Number(8)

// console.log(typeof person , person);
// console.log(typeof arr , arr);
// console.log(typeof str , str);
// console.log(typeof num , num + 5);
function User(){
    this.name = "Max";
    this.age = 35;
}
let user = new User();

console.log(user);

function Person(n  , a){
    this.name = n;
    this.age = a;
    return 
}

let person = new Person("John" , 33 )
//let vipPerson = new Person("vip " , 44)
//person.city = "Berlin"
console.log(person);
//console.log(vipPerson);
//  let person2 = new function( ){
//     this.name = "Sara"
//     this.age = 33
//  }
//  console.log(person2);
     
  function YoutubeUser(name ="new user", type = "normal" , photo ="none" ){
      this.name = name ; 
      this.type = type;
      this.photo = photo;
      this.sayHi = function(){
          console.log(` hello my name is ${this.name}`);
      }
  }
  let user2 = new YoutubeUser("Shrekesh", "premium" ,"profile-photo");
  let user3 = new YoutubeUser("John",undefined ,"new photo"   );
  console.log(user2);
  console.log(user3); // { name: 'John', type: 'normal', photo: 'new photo' }
  user2.sayHi() // hello my name is Shrekesh
 