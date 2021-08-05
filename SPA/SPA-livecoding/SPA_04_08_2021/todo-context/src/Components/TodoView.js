import React , { useContext}  from 'react'
import ToDoContext from '../context/ToDoContext'


function TodoView() {
    const { todos , removeTodo } = useContext(ToDoContext)
    return (

        <div>
            {todos.map((item , index) => {
                return <div onClick = { ()=>{ removeTodo(index)}} key = { index}> { item} </div> 
            })}
        </div>
    )
}

export default TodoView
