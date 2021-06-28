
import './App.css';
import Footer from './Components/Footer.js';
const list = [ 'Facebook' , 'Netflix', 'Reddit' , 'Ebay' ,'Dropbox','Coursera','Airbnb'];
function Header(){
  return (
    <div className="header">
         <ul>
           <li>Home</li>
           <li>Aboout</li>
           <li>contact</li>
         </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <h3> React introduction </h3>
      <p> start with react</p>
      <p>websites created with React:</p>
      {/* jsx code  start */}
       {
       list.map((item , index)=>{
     
        return  <h4 key ={index}>  {item } : {index}  </h4>
     
       })
       }
    {/* jsx code  start end */}
     <Footer />
    </div>
  );
}

export default App;
