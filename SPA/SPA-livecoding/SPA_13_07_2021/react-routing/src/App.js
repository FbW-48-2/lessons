 import './App.css';
 import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import Weather from './Components/Weather';
import Settings from './Components/Settings';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
   <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact  >
            <Home    />
          </Route>  

          <Route path ='/weather' component={Weather}  />         
          

          <Route  path ='/settings' exact  >          
            <Settings />
          </Route>

          <Route path= '/settings/colors' exact>
            <div> settings for colors </div>
          </Route>
        
        
        
      </Switch>
  </Router>
  );
}

export default App;
