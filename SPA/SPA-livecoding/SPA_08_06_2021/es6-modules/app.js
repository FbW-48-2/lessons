import { greeting , Person  } from './main.js';
import { randomNumber as random} from './main.js'



import car from './main.js'; // importing an default exported variable 
//greeting('Alex');

let  personA = new Person('Max', 40 , 'Berlin' , 'react developer');
personA.personInfo();

console.log(car);


console.log(random());
 
// to import all the exported to one variable
// import * as main from './main.js'

// main.greeting('John');



