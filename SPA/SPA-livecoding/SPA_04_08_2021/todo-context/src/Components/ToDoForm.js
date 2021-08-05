import React , {useState , useContext} from 'react'
import ToDoContext from '../context/ToDoContext';

function ToDoForm() {
    const { addTodo} = useContext(ToDoContext)

    const [ text , setText] = useState('');

    function onSubmit(e) {
         e.preventDefault()
         addTodo(text);
         setText('')
        
    }
    return (
        <form onSubmit= {onSubmit}>
            <div>
            <label> what to do </label>
            <input type="text" onChange={(e)=> setText(e.target.value)} value={text} />
            </div>
            <button type="submit"> submit </button>            
        </form>
    )
}

export default ToDoForm
