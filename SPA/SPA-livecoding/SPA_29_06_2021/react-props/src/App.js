
import './App.css';
import Car from './Components/Car';
import {CarClass}  from './Components/CarClass'
function App() { 
  
  return (
  
    <div className="App">
      <h1> React Props Example</h1>
      <Car brand = "Ford" model = "Galaxy"  photo = "./images/ford-galaxy.jpeg" inStock={true} >
        <h4>City car</h4>
        <p> price : 5000 euro</p>
      </Car>
      <Car brand = "Kia" model= "Sportage" photo = "./images/kia-sportage.jpg" inStock={false}  >
      <h4> Sport car</h4>
      </Car>
      <Car brand = "BMW" model = "X5" photo = "./images/bmw-x5.png" inStock={true} >
      <h4> Premium car</h4>
      </Car>  

      <CarClass brand = "BMW" model = "X5" photo = "./images/bmw-x5.png" inStock={true} >
      <h4> Premium car</h4>
      </CarClass> 
    </div>  

   
  );
}

export default App;