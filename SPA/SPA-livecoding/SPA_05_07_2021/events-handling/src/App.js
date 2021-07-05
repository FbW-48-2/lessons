 
import './App.css';
import Inputs from './Components/Inputs';
import Switch from './Components/Switch';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <h1> Events</h1>
      <Switch />
      <hr /> <br/>
      <Inputs />
      <hr /> <br/>
      <User />
    </div>
  );
}

export default App;
