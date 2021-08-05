const ToDoReducer = (state , action)=>{
 switch (action.type) {
     case 'add-toDo':
         return [ ...state , action.payload ] ;
         
 
     case 'remove-toDo':
         return state.filter((item , i )=> i !== action.payload)
         
     default :
     return state    
 }
}

export default ToDoReducer;