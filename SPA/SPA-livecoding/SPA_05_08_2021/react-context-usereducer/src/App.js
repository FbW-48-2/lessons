import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import NotificationsState from './context/notifications/NotificationsState';

function App() {
  return (
    <div className="App">
      <NotificationsState>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path ='/about' component = {About} />
          <Route path ='/contact' component = {Contact} />
          <Route path = '/products/:productName' component = {Products} />
          
        </Switch>
        
      </Router>
      </NotificationsState>
    </div>
  );
}

export default App;
