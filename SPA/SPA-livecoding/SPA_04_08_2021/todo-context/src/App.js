import React , { useState}  from 'react';
import ToDoContext from './context/ToDoContext';
import ToDoForm from './Components/ToDoForm'; 
import './App.css';
import TodoView from './Components/TodoView';

function App() {
    const [ todos , setTodos] = useState([]);

    const addTodo = (item)=>{
       setTodos([...todos , item])
    }
   

  return (
    <ToDoContext.Provider value={{ todos, addTodo }} >
        <div className="App">
        <h1> Context Todo</h1>
        <ToDoForm />
        <TodoView />
        </div>
    </ToDoContext.Provider>
  );
}

export default App;
