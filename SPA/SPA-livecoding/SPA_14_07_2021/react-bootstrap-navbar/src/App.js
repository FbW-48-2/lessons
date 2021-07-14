import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path ='/about' component = {About} />
          <Route path ='/contact' component = {Contact} />
          <Route path = '/products/:productName' component = {Products} />
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
