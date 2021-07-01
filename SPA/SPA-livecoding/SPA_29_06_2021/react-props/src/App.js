
import './App.css';
import Car from './Components/Car';
import {Auto}  from './Components/Auto'
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

      <Auto brand = "BMW" model = "X5" photo = "./images/bmw-x5.png" inStock={true} >
      <h4> class component</h4>
      </Auto> 
    </div>  

   
  );
}

export default App;
