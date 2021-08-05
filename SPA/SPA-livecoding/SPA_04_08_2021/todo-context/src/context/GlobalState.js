import React , { useState , useReducer} from 'react'
import ToDoContext from './ToDoContext'
import ToDoReducer from './ToDoReducer';
function GlobalState(props) {
    const initialState = [];

    const [ todos , dispatch] = useReducer( ToDoReducer , initialState);

    const addTodo = (item)=>{
    //    setTodos([...todos , item])
    dispatch({ type : 'add-toDo' , payload : item })
    }
    const removeTodo = (index)=>{
    //    const filtered =  todos.filter((item, i)=> {
    //         return i !== index
    //     });
    //     setTodos(filtered)
      dispatch({ type : 'remove-toDo' , payload : index})

    }
    return (
        <ToDoContext.Provider value={{ todos , addTodo , removeTodo}} >
           { props.children}
        </ToDoContext.Provider>
    )
}

export default GlobalState
