import React , { useContext}  from 'react'
import ToDoContext from '../context/ToDoContext'


function TodoView() {
    const { todos } = useContext(ToDoContext)
    return (

        <div>
            {todos.map((item , index) => {
                return <div key = { index}> { item} </div> 
            })}
        </div>
    )
}

export default TodoView
