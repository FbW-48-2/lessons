function Person(n  , a , city , job){
    this.name = n;
    this.age = a;
    //this.city = city;
    this.job = job
    if(city !== undefined){
        this.city = city;
    }
     
     
}

let person = new Person("Max" , 44,"Berlin" , " ios developer"); 
person.hobby  = " javascript" 
 
console.log(person);