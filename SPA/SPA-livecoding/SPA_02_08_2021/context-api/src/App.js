import {useState}  from 'react'
import './App.css';
import UserLogin from './Components/UserLogin';
import LanguageContext from './context/LanguageContext';

function App() {
  const [ lang , setLang] = useState('En')
  return (
    <div className="App">
      <div>
        <i className="flag us"  onClick ={ ()=> setLang('En')  }  />
        <i className="flag de" onClick ={ ()=> setLang('De')  } />
      </div>
      <LanguageContext.Provider value ={lang}>
        <UserLogin />
      </LanguageContext.Provider>  
      
    </div>
  );
}

export default App;
