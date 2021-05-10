// inheritance in js classes 
// parent class 
// child class 
// => parent to child 

// class Person{ // the parent 

// }
// class Student extends Person{ // child class 

// }
// Student inherit class members , constructor , methods from Person Class
// without constructor 
class Animal {
    name = "Lulu";
    sayHi(){
        console.log("Hi "+ this.name);
    }

}
class Cat extends Animal{
     
}

let cat = new Cat();
console.log(cat);
cat.sayHi();
//###################################################

class Person{
    constructor(name, email,address){
        this.name = name ;
        this.email = email ; 
        this.address = address;
    }
    greet(){
        console.log(" Hello " + this.name + " how are you ?");
    }
    static age() {
     console.log(" the age is 30");
    }
} 

class Student extends Person{
    constructor( name,email, address , semester , university , StudentID){
        
        super(name , email ,address )
        this.semester = semester; 
        this.university = university;
        this.StudentID = StudentID;   
        super.greet() ;       
    }
}
let student = new Student("John","john@yahoo.com","Berlin neuköln" ,4 ,"TU Berlin" ,"q7123")
console.log(student);
student.greet();
Student.age()
 
