class Animal {
     name = "ABC";
     static type = "pudel"; // static only with the class name Animal.type
     type = "Hasky"; // public 
     isCute = true;
     
    // constructor(name) {
    //     this.name = name ;
    //     console.log(this);

    // }
    greet(){
        console.log("Hello " + this.name);
    }
    changeName(newName){
        this.name = newName
        this.greet()
    }
}

const dog = new Animal();
 // object 
dog.changeName("Lucy");
//dog.isCute = false
//dog.type = "Pit Bull" // create new property 
console.log(dog.type);
console.log(dog);
Animal.type = " aaa"
console.log(Animal.type);
console.log(dog.type);

 