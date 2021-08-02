import { useState } from 'react'; 
import './App.css';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import UserContext from './context';
import { LanguageContext } from './context';

function App() {
  const [theme , setTheme] = useState('dark')
  return (
    <div className="App">
      <h1> Context Api</h1>
      <LanguageContext.Provider value="En">
        <UserContext.Provider value={ {name:"Max" , address:"Berlin" , age:40  ,theme ,setTheme} }>
          <Layout />
          <Footer />
        </UserContext.Provider>   
      </LanguageContext.Provider> 
      
    </div>
  );
}

export default App;
