import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      
       <Router>
         <NavBar />
         <Switch>
           <Route path='/login' component={Login} /> 
           <Route path='/dashboard' component={ ()=> <Dashboard auth={false}  /> } /> 
         </Switch>
       </Router>

    </div>
  );
}

export default App;
