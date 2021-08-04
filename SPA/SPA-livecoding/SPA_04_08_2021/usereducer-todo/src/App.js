import React, { useReducer , useState} from 'react';
import './App.css';

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'add-todo':
      return {  todos : [...state.todos , {  todo : action.payload , completed : false , id : Date.now() }] }     
    case 'toggle-todo' : 
      return {
        todos : state.todos.map((item)=>{
         return  action.payload === item.id ? {...item , completed : !item.completed } : item
        })
      }
      case  'remove-todo' :
        return {
          todos : state.todos.filter( item =>{
            return item.id !== action.payload;
          })
        }
    
  
    default:
      return state
  }
}


function App() {
  const [text , setText] = useState();
  const initialState = {  todos : []};
  
  const [ state , dispatch] = useReducer(reducer , initialState);

  function submitForm(e) {
    e.preventDefault();
    dispatch({ type : 'add-todo' , payload : text });
    setText('');


  }
  return (
    <div className="App">
       <h1> To Do </h1>
       <form onSubmit={submitForm}>
         <input value={text} type ="text"  onChange = { (e)=> setText(e.target.value) } />
       </form>
       { state.todos.map((item)=>{
         return <div onClick = { ()=> dispatch({ type : 'toggle-todo' ,payload:item.id })} 
         style ={{  
           textDecoration : item.completed ? "line-through" : ""
         }}><button onClick = { ()=> dispatch({ type : 'remove-todo' ,payload:item.id })} 
         > x </button> {item.todo} </div>
       })}
    </div>
  );
}

export default App;
