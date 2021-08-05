import React,{useReducer} from 'react';
import CountReducer from './CountReducer';
import './App.css';

function App() {
  const initialState = { count : 0}
  const [state , dispatch] = useReducer(CountReducer, initialState)

  return (
    <div className="App">
      <h1> useReducer</h1> 
     <h4> Count : { state.count}</h4>
      <button onClick= {()=> dispatch({ type : "increment" ,payload : Date.now()   })}  > + </button>
      <button onClick= {()=> dispatch({ type : "decrement"})}  > - </button>
    </div>
  );
}

export default App;
