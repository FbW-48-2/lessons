export function  greeting(name) {
    alert('Hello '+ name)
}
export function randomNumber() {
    return Math.random() * 9 
}

export class Person {
    constructor(name , age , address, job){
        this.name = name ;
        this.age = age;
        this.address = address;
        this.job = job;

    }
    personInfo(){
        alert(`${this.name} is ${this.age} years old and works as ${this.job} and live in ${this.address}`)
    }
}
// we can export at the end 
// export { greeting , Person  }


// export default only one time 
// optional  


let car = {
    brand : "BMW",
    model:"X1",
    color:"red"

}
export  function getWeather(city) {

    
}
export default car