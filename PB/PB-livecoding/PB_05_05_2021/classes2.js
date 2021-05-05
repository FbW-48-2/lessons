class Car {
  constructor(carName , carSpeed){
      this.name = carName;
      this.speed = carSpeed;
      this.constructor.info();
     
  }
  move(){
     
      console.log(` moving the car ${this.name} with speed ${this.speed} kmh `);
  }
  stop(){
    console.log(` stop the car ${this.name} with speed ${this.speed} kmh `); 
  }
   static info(){
      console.log(` this is some info about ${this.name} car`);
  }
  static getSum(num1 , num2){
      return num1 + num2
  }
  
}

let sportCar = new Car("BMW" ,230);

 console.log(sportCar);
//  sportCar.move()
//  sportCar.stop()
//  Car.info();
