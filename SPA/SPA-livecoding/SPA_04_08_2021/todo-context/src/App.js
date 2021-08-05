import React , { useState}  from 'react';
import GlobalState from './context/GlobalState';
import ToDoContext from './context/ToDoContext';
import ToDoForm from './Components/ToDoForm'; 
import './App.css';
import TodoView from './Components/TodoView';

function App() {
    // const [ todos , setTodos] = useState([]);

    // const addTodo = (item)=>{
    //    setTodos([...todos , item])
    // }
   

  return (
    <GlobalState >
        <div className="App" >
        <h1> Context Todo</h1>
        <ToDoForm />
        <TodoView />
        </div>
    </GlobalState>
  );
}

export default App;
